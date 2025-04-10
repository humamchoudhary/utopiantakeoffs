"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Mail } from "lucide-react";
import toast from "react-hot-toast";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [email, setEmail] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
    if (rejectedFiles) {
      toast.error(rejectedFiles[0].errors[0].message);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      // maxSize: 20 * 1024 * 1024,
    });

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const sendFiles = async () => {
    // Validate email
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Check if files are selected
    if (files.length === 0) {
      setStatus("No files to send");
      toast.error("Please select files to upload");
      return;
    }

    setStatus("Sending...");
    const formData = new FormData();

    // Append files
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    // Append email
    formData.append("email", email);

    try {
      const response = await fetch("/api/send_pdf", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setStatus(data.message);

      if (response.ok) {
        setUploaded(true);
        toast.success("Files uploaded successfully!");
      } else {
        toast.error(data.message || "Failed to upload files");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus(`Error sending files: ${error.message}`);
      toast.error(`Error sending files: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Dropzone Section */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed duration-300 rounded-lg px-7 py-12 md:px-28 md:py-14 flex items-center justify-center flex-col text-center cursor-pointer transition-colors
          ${isDragActive ? "border-primary " : "border-primaryhex/50  hover:border-primaryhex"}`}
      >
        <input {...getInputProps()} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={39}
          height={37}
          fill="none"
        >
          <path
            stroke="#601E1A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19.5 1.834c5.408 0 9.792 4.384 9.792 9.792v1.959a7.833 7.833 0 0 1 7.833 7.833c0 2.9-1.575 5.5-3.917 6.854m-23.5-14.687v-1.959c0-2.204.729-4.238 1.958-5.875m-1.958 7.833a7.833 7.833 0 0 0-7.833 7.834c0 2.9 1.575 5.5 3.917 6.854m3.916-14.687c.848 0 1.664.134 2.429.383m7.363 3.533v17.625m0-17.625 5.875 5.875M19.5 17.501l-5.875 5.875"
          />
        </svg>
        <p className="mt-2 text-base font-semibold gap-3 leading-6 text-[#FAFAFB]">
          {isDragActive
            ? "Drop the files here..."
            : "Drag & drop files or Browse"}
        </p>
        <p className="text-[#475464] mt-3 text-lg font-medium w-[300px] md:w-[409px] leading-[18px] ">
          Supported formats for Plan will be PDF File, Word.
        </p>
      </div>

      {/* Email Input Section */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="text-gray-400" size={20} />
        </div>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-3 pl-10 pr-4 border border-primaryhex/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-[#FAFAFB] bg-transparent"
        />
      </div>

      {/* File List Section */}
      {files.length > 0 && !uploaded && (
        <div>
          <h4 className="text-xl leading-6 font-semibold">Upload files:</h4>
          <ul className="list-disc pl-5">
            {files.map((file) => (
              <li key={file.name} className="text-xl leading-8 text-[#475464]">
                {file.name} - {file.size} bytes
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Initial Note Section */}
      {!files.length && !uploaded && (
        <div>
          <h4 className="text-xl leading-6 font-semibold mb-3">Note:</h4>
          <p className="text-xl leading-8 text-[#475464]">
            Upload Your Document. So, We'll get back to you with a quote
            shortly.
          </p>
        </div>
      )}

      {/* Uploaded Success Section */}
      {uploaded && (
        <div className="">
          <h4 className="text-xl leading-6 font-semibold mb-3">Note:</h4>
          <p className="text-xl leading-8 text-[#475464]">
            Your documents have been uploaded. We will get back to you shortly
          </p>
        </div>
      )}

      {/* Send Button Section */}
      <div className="flex flex-row w-full justify-end items-center gap-4">
        {status && (
          <div className="">
            <p className="text-xl leading-8 text-[#475464]">{status}</p>
          </div>
        )}
        <button
          onClick={sendFiles}
          disabled={!files.length || !email}
          className="flex mr-1 font-semibold text-[18px] 
            disabled:bg-gray-500 
            hover:bg-[#601E1A]/90 
            duration-300 
            text-[#FFFF] 
            bg-[#601E1A] 
            px-6 py-4 
            rounded-full 
            flex-row 
            items-center 
            gap-2"
        >
          Send Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
          >
            <path
              stroke="#E4E4E4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="m18.086 14.822.95-8.432m0 0-8.43-.951m8.43.95L4.964 17.613"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
