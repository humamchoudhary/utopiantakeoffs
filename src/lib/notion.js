// lib/notion.js
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// Function to get all services from Notion database
export async function getServices() {
  const databaseId = process.env.NOTION_SERVICES_DATABASE_ID;
  
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  
  return Promise.all(
    response.results.map(async (page) => {
      // Get the page properties from Notion
      const title = page.properties.Title.title[0]?.plain_text || "Untitled";
      const slug = title.toLowerCase().replace(/ /g, "-");

      const pageId =page.properties.ID.rich_text[0]?.plain_text     
      // Get the page content
      const mdBlocks = await n2m.pageToMarkdown(pageId);
      const content = n2m.toMarkdownString(mdBlocks);
      
      // Get the first image
      let image = "";
      const pageContent = await notion.blocks.children.list({
        block_id: pageId,
      });
      
      for (const block of pageContent.results) {
        if (block.type === "image") {
          image = block.image.file ? block.image.file.url : block.image.external.url;
          break;
        }
      }
      
      return {
        page_id: pageId,
        title,
        image,
        content: content.parent,
        slug,
      };
    })
  );
}

// Function to get all trades from Notion database
export async function getTrades() {
  const databaseId = process.env.NOTION_TRADES_DATABASE_ID;
  
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  
  return Promise.all(
    response.results.map(async (page) => {
      // Get the page properties from Notion
      const title = page.properties.Title.title[0]?.plain_text || "Untitled";
      const slug = title.toLowerCase().replace(/ /g, "-");
      const pageId = page.id;
      
      // Get the page content
      const mdBlocks = await n2m.pageToMarkdown(pageId);
      const content = n2m.toMarkdownString(mdBlocks);
      
      // Get the first image
      let image = "";
      const pageContent = await notion.blocks.children.list({
        block_id: pageId,
      });
      
      for (const block of pageContent.results) {
        if (block.type === "image") {
          image = block.image.file ? block.image.file.url : block.image.external.url;
          break;
        }
      }
      
      return {
        page_id: pageId,
        title,
        image,
        content: content.parent,
        slug,
      };
    })
  );
}

// Function to get all data at once (both services and trades)
export async function getAllData() {
  const services = await getServices();
  const trades = await getTrades();
  
  return {
    services,
    trades,
  };
}

// Function to get a single service by slug
export async function getServiceBySlug(slug) {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}

// Function to get a single trade by slug
export async function getTradeBySlug(slug) {
  const trades = await getTrades();
  return trades.find((trade) => trade.slug === slug);
}
