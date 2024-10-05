"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
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
    console.log(rejectedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxSize: 20 * 1024 * 1024,
    });

  const sendFiles = async () => {
    if (files.length === 0) {
      setStatus("No files to send");
      return;
    }

    setStatus("Sending...");
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const response = await fetch("/api/send_pdf", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setStatus(data.message);
      if (response.ok) {
        setUploaded(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus(`Error sending files: ${error.message}`);
      toast.error(`Error sending files: ${error.message}`);
    }
  };

  return (
    <div className="px-[72px]">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed duration-300 rounded-lg my-8 px-14 py-28 flex items-center justify-center flex-col text-center cursor-pointer transition-colors
          ${isDragActive ? "border-primary bg-primaryhex/30" : "border-primaryhex/50 bg-[#F9E8E8] hover:border-primaryhex"}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-base font-semibold leading-6 text-[#601E1A]">
          {isDragActive
            ? "Drop the files here..."
            : "Drag & drop files or Browse"}
        </p>
        <p className="text-[#475464] text-sm leading-[18px]">
          Supported formats for Plan will be PDF File, Word.
        </p>
      </div>
      {files.length > 0 && !uploaded && (
        <div className="mt-6">
          <h4 className="text-xl leading-6 font-semibold mb-3">
            Upload files:
          </h4>
          <ul className="list-disc pl-5">
            {files.map((file) => (
              <li key={file.name} className="text-xl leading-8 text-[#475464]">
                {file.name} - {file.size} bytes
              </li>
            ))}
          </ul>
          <div className="flex flex-row w-full justify-end">
            {status && (
              <div className="mt-6">
                <p className="text-xl leading-8 text-[#475464]">{status}</p>
              </div>
            )}
            <button
              onClick={sendFiles}
              className="flex mr-1 font-semibold text-[18px] hover:bg-[#601E1A]/90 duration-300 text-bg bg-[#601E1A] px-6 py-4 rounded-2xl flex-row "
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
      )}

      {!files.length && !uploaded && (
        <div className="mt-6">
          <h4 className="text-xl leading-6 font-semibold mb-3">Note:</h4>
          <p className="text-xl leading-8 text-[#475464]">
            Upload Your Document. So, We'll get back to you with a quote
            shortly.
          </p>
        </div>
      )}

      {uploaded && (
        <div className="mt-6">
          <h4 className="text-xl leading-6 font-semibold mb-3">Note:</h4>
          <p className="text-xl leading-8 text-[#475464]">
            Your documents have been uploaded. We will get back to you shortly
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
