// components/NotionBlocks.jsx
import React from "react";
import Image from "next/image";

// Main component to render any Notion block
export const NotionBlock = ({ block }) => {
  if (!block) return null;

  switch (block.type) {
    case "paragraph":
      return renderParagraph(block);
    case "heading_1":
      return (
        <h1 className="text-3xl font-bold my-6 mt-24">
          {block.heading_1.text}
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="text-2xl font-bold my-5 mt-16">
          {block.heading_2.text}
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="text-xl font-bold my-4 mt-12">{block.heading_3.text}</h3>
      );
    case "bulleted_list_item":
      return (
        <li className="ml-6 list-disc my-2">{block.bulleted_list_item.text}</li>
      );
    case "numbered_list_item":
      return (
        <li className="ml-6 list-decimal my-2">
          {block.numbered_list_item.text}
        </li>
      );
    case "to_do":
      return renderToDo(block);
    case "toggle":
      return renderToggle(block);
    case "child_page":
      return (
        <div className="my-4 p-4 border border-gray-200 rounded-lg">
          {block.child_page.title}
        </div>
      );
    case "image":
      return renderImage(block);
    case "code":
      return renderCode(block);
    case "quote":
      return renderQuote(block);
    case "divider":
      return <hr className="my-6" />;
    case "callout":
      return renderCallout(block);
    case "table":
      return renderTable(block);
    case "column_list":
      return renderColumnList(block);
    case "bookmark":
      return renderBookmark(block);
    case "embed":
      return renderEmbed(block);
    case "video":
      return renderVideo(block);
    case "file":
      return renderFile(block);
    case "pdf":
      return renderPdf(block);
    default:
      return (
        <div className="my-4 text-gray-500">
          Unsupported block type: {block.type}
        </div>
      );
  }
};

// Helper function to render paragraph
function renderParagraph(block) {
  return <p className="my-4">{block.paragraph.text}</p>;
}

// Helper function to render to-do
function renderToDo(block) {
  return (
    <div className="flex items-center my-2">
      <input
        type="checkbox"
        checked={block.to_do.checked}
        readOnly
        className="mr-2"
      />
      <span>{block.to_do.text}</span>
    </div>
  );
}

// Helper function to render toggle
function renderToggle(block) {
  return (
    <details className="my-4">
      <summary className="cursor-pointer font-medium">
        {block.toggle.text}
      </summary>
      <div className="pl-4 mt-2">
        {block.children &&
          block.children.map((child) => (
            <NotionBlock key={child.id} block={child} />
          ))}
      </div>
    </details>
  );
}

// Helper function to render image
function renderImage(block) {
  const imageUrl = block.image.file
    ? block.image.file.url
    : block.image.external.url;
  const caption = block.image.caption ? block.image.caption[0]?.plain_text : "";

  return (
    <div className="my-6">
      <Image
        src={imageUrl}
        alt={caption || "Notion image"}
        width={800}
        height={500}
        className="rounded-lg"
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
      />
      {caption && <p className="text-center text-gray-600 mt-2">{caption}</p>}
    </div>
  );
}

// Helper function to render code
function renderCode(block) {
  return (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
      <code>{block.code.text}</code>
    </pre>
  );
}

// Helper function to render quote
function renderQuote(block) {
  console.log(block.quote.rich_text);
  const text = block.quote.text.split("\n");
  return (
    <div className="w-full py-10 rounded-lg bg-primary text-center pl-4 my-20">
      <h1 className="text-4xl font-black mb-5">{text[0]}</h1>
      <p>{text[1]}</p>
    </div>
  );
}

// Helper function to render callout
function renderCallout(block) {
  const emoji = block.callout.icon?.emoji;
  console.log(block.callout);

  return (
    <div className="p-4 rounded-lg my-4 flex items-start">
      <div>{block.callout.text}</div>
    </div>
  );
}

// Helper function to render table
function renderTable(block) {
  if (!block.children) return <div>Loading table...</div>;

  // Extract rows from children
  const rows = block.children
    .map((row) => {
      if (row.type !== "table_row") return null;
      return row.table_row.cells.map((cell, i) => ({
        id: `${row.id}-${i}`,
        content: cell.map((c) => c.plain_text).join(""),
      }));
    })
    .filter(Boolean);

  // Extract header row
  const hasTableHeader = block.table?.has_column_header;
  const headerRow = hasTableHeader ? rows.shift() : null;

  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-gray-300">
        {headerRow && (
          <thead>
            <tr className="bg-gray-100">
              {headerRow.map((cell) => (
                <th key={cell.id} className="px-4 py-2 border border-gray-300">
                  {cell.content}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell) => (
                <td key={cell.id} className="px-4 py-2 border border-gray-300">
                  {cell.content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Helper function to render column list
function renderColumnList(block) {
  if (!block.children) return null;

  // Determine column count
  const columnCount = block.children.length;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columnCount} gap-4 my-6`}>
      {block.children.map((column, index) => (
        <div key={index} className="notion-column">
          {column.children &&
            column.children.map((child) => (
              <NotionBlock key={child.id} block={child} />
            ))}
        </div>
      ))}
    </div>
  );
}

// Helper function to render bookmark
function renderBookmark(block) {
  return (
    <a
      href={block.bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 rounded-lg p-4 my-4 hover:bg-gray-50"
    >
      <div className="text-blue-600">{block.bookmark.url}</div>
      {block.bookmark.caption && (
        <div className="text-gray-500 text-sm mt-2">
          {block.bookmark.caption}
        </div>
      )}
    </a>
  );
}

// Helper function to render embed
function renderEmbed(block) {
  return (
    <div className="my-4">
      <iframe
        src={block.embed.url}
        className="w-full rounded-lg border border-gray-200"
        height="400"
        allowFullScreen
      />
      {block.embed.caption && (
        <p className="text-center text-gray-600 mt-2">{block.embed.caption}</p>
      )}
    </div>
  );
}

// Helper function to render video
function renderVideo(block) {
  const videoUrl = block.video.external?.url || "";

  return (
    <div className="my-6">
      <iframe
        src={videoUrl}
        className="w-full rounded-lg"
        height="400"
        allowFullScreen
      />
      {block.video.caption && (
        <p className="text-center text-gray-600 mt-2">{block.video.caption}</p>
      )}
    </div>
  );
}

// Helper function to render file
function renderFile(block) {
  const fileUrl = block.file.file?.url || block.file.external?.url || "";
  const filename = fileUrl.split("/").pop() || "Download file";

  return (
    <div className="my-4">
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        {filename}
      </a>
    </div>
  );
}

// Helper function to render PDF
function renderPdf(block) {
  const pdfUrl = block.pdf.file?.url || block.pdf.external?.url || "";

  return (
    <div className="my-6">
      <iframe
        src={pdfUrl}
        className="w-full rounded-lg border border-gray-200"
        height="500"
      />
      {block.pdf.caption && (
        <p className="text-center text-gray-600 mt-2">{block.pdf.caption}</p>
      )}
    </div>
  );
}

export default NotionBlock;
