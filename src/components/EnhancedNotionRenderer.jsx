// components/EnhancedNotionRenderer.js
import { Client } from "@notionhq/client";

export async function processBlocks(pageId) {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  let allBlocks = [];
  let cursor = undefined;

  // Fetch all blocks in the page with pagination
  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
      start_cursor: cursor,
    });

    allBlocks = [...allBlocks, ...response.results];
    cursor = response.next_cursor;
  } while (cursor);

  // Process each block to handle rich text and children
  const processedBlocks = await Promise.all(
    allBlocks.map(async (block) => {
      // console.log(block)
      // Process rich text for text-based blocks
      processRichText(block);

      // Handle nested blocks
      if (block.has_children) {
        const childBlocks = await processBlocks(block.id);
        block.children = childBlocks;
      }

      return block;
    }),
  );

  return processedBlocks;
}

// Helper function to process rich text in blocks
function processRichText(block) {
  const blockTypes = [
    "paragraph",
    "heading_1",
    "heading_2",
    "heading_3",
    "bulleted_list_item",
    "numbered_list_item",
    "to_do",
    "toggle",
    "quote",
    "callout",
  ];

  blockTypes.forEach((type) => {
    if (block[type] && block[type].rich_text) {
      block[type].text = block[type].rich_text
        .map((rt) => rt.plain_text)
        .join("");
    }
  });
}

export default function EnhancedNotionRenderer({ blocks }) {
  return (
    <div className="notion-content">
      {blocks.map((block) => (
        <NotionBlock key={block.id} block={block} />
      ))}
    </div>
  );
}
