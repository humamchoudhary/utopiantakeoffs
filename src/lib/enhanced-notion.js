// lib/enhanced-notion.js
import { Client } from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";
import { processBlocks } from "../components/EnhancedNotionRenderer";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// const n2m = new NotionToMarkdown({ notionClient: notion });

// Function to get all services with enhanced content
export async function getServices() {
  const databaseId = process.env.NOTION_SERVICES_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return Promise.all(
    response.results.map(async (page) => {
      // setTimeout(() => {
      //   console.log("Executed after 2 seconds");
      // }, 2000); // 2000ms = 2 seconds      // Get the page properties from Notion
      // console.log(page.properties);
      const title = page.properties.Title.title[0]?.plain_text || "Untitled";
      const slug = title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]/g, "");
      const pageId = page.properties.ID.rich_text[0]?.plain_text;

      // Get raw blocks for enhanced rendering
      const blocks = await processBlocks(pageId);

      // Get the first image
      let image = "";
      for (const block of blocks) {
        if (block.type === "image") {
          image = block.image.file
            ? block.image.file.url
            : block.image.external.url;
          break;
        }
      }
      // console.log("BLOCKS");
      // console.log(blocks);

      return {
        page_id: pageId,
        title,
        image,
        rawBlocks: blocks,
        slug,
      };
    }),
  );
}

// Function to get all trades with enhanced content
export async function getTrades() {
  const databaseId = process.env.NOTION_TRADES_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return Promise.all(
    response.results.map(async (page) => {
      // setTimeout(() => {
      //   console.log("Executed after 2 seconds");
      // }, 2000); // 2000ms = 2 seconds
      // Get the page properties from Notion
      const title = page.properties.Title.title[0]?.plain_text || "Untitled";
      const slug = title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]/g, "");
      const pageId = page.properties.ID.rich_text[0]?.plain_text;

      // Get raw blocks for enhanced rendering
      const blocks = await processBlocks(pageId);

      // Get the first image
      let image = "";
      for (const block of blocks) {
        if (block.type === "image") {
          image = block.image.file
            ? block.image.file.url
            : block.image.external.url;
          break;
        }
      }

      return {
        page_id: pageId,
        title,
        image,
        rawBlocks: blocks,
        slug,
      };
    }),
  );
}

// Get all data (services and trades)
export async function getAllData() {
  const services = await getServices();
  const trades = await getTrades();

  return {
    services,
    trades,
  };
}

// Get service by slug
export async function getServiceBySlug(slug) {
  const databaseId = process.env.NOTION_SERVICES_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Title",
      title: {
        contains: slug.replace(/-/g, " "), // Convert slug back to title format
      },
    },
  });

  if (!response.results.length) return null;

  const page = response.results[0];

  const title = page.properties.Title.title[0]?.plain_text || "Untitled";
  const pageId = page.properties.ID.rich_text[0]?.plain_text;

  const blocks = await processBlocks(pageId);

  let image = "";
  for (const block of blocks) {
    if (block.type === "image") {
      image = block.image.file
        ? block.image.file.url
        : block.image.external.url;
      break;
    }
  }

  return {
    page_id: pageId,
    title,
    image,
    rawBlocks: blocks,
    slug,
  };
}

// Get trade by slug
export async function getTradeBySlug(slug) {
  const databaseId = process.env.NOTION_TRADES_DATABASE_ID;

  // Query Notion to find the trade with the matching slug
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Title",
      title: {
        contains: slug.replace(/-/g, " "), // Convert slug back to title format
      },
    },
  });

  if (!response.results.length) return null;

  const page = response.results[0];

  const title = page.properties.Title.title[0]?.plain_text || "Untitled";
  const pageId = page.properties.ID.rich_text[0]?.plain_text;

  const blocks = await processBlocks(pageId);

  let image = "";
  for (const block of blocks) {
    if (block.type === "image") {
      image = block.image.file
        ? block.image.file.url
        : block.image.external.url;
      break;
    }
  }

  return {
    page_id: pageId,
    title,
    image,
    rawBlocks: blocks,
    slug,
  };
}
