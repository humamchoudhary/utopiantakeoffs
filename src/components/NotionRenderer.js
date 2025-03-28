"use client";

import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import React from "react";

// Custom components for rendering MDX
const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold my-3" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold my-2" {...props} />,
  p: (props) => {
    // Check if the paragraph contains only an img element
    const children = React.Children.toArray(props.children);
    if (
      children.length === 1 &&
      React.isValidElement(children[0]) &&
      children[0].type.name === "img"
    ) {
      // If it's just an image, don't wrap it in a paragraph
      return <>{props.children}</>;
    }
    return <p className="my-2" {...props} />;
  },
  img: ({ src, alt, ...props }) => {
    // Check if the image URL is valid
    if (!src || typeof src !== "string") {
      return null;
    }

    try {
      // For external images, use a regular img tag
      if (src.startsWith("http")) {
        return (
          <div className="my-4">
            <Image
              src={src}
              alt={alt || "Image"}
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>
        );
      } else {
        // For relative paths, use a regular img tag
        return (
          <img
            src={src}
            alt={alt || "Image"}
            className="my-4 rounded-lg max-w-full h-auto"
          />
        );
      }
    } catch (error) {
      console.error("Error rendering image:", error);
      return (
        <img
          src={src}
          alt={alt || "Image"}
          className="my-4 rounded-lg max-w-full h-auto"
        />
      );
    }
  },
  ul: (props) => <ul className="list-disc pl-5 my-2" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 my-2" {...props} />,
  li: (props) => <li className="my-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  tr: (props) => <tr className="bg-white even:bg-gray-50" {...props} />,
  th: (props) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm" {...props} />
  ),
};

// This is now a client component that can use hooks
const NotionRenderer = ({ source }) => {
  return (
    <div className="notion-content">
      <MDXRemote {...source} components={components} />
    </div>
  );
};

export default NotionRenderer;
