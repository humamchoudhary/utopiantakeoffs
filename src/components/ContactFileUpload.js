"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Paperclip } from "lucide-react";
import toast from "react-hot-toast";
const ContactFileUpload = ({ files, setFiles }) => {
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },
  });

  return (
    <div className="w-full">
      <h2 className="block text-sm font-semibold text-fg md:text-[16px] mb-[13px]">
        Attach Your Plan
      </h2>
      <div
        {...getRootProps()}
        className={`
          flex items-center justify-between
px-4 py-[14px]  w-full  bg-[#1F2129] rounded-xl border-[#2F323C] shadow-sm 
        `}
      >
        <input {...getInputProps()} />
        <span className="font-medium text-gray-400 text-lg">
          {isDragActive
            ? "Drop the files here"
            : files && files.length
              ? files.map((file) => file.name)
              : ".pdf, .txt, .docs"}
        </span>
        <Paperclip className="h-5 w-5 text-[#5E6272]" />
      </div>
    </div>
  );
};

export default ContactFileUpload;
