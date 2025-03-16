// components/NotionContent.jsx
import React from 'react';
import { NotionBlock } from './NotionBlocks';

export default function NotionContent({ blocks }) {
  // Handle lists properly by grouping adjacent list items
  const renderedBlocks = [];
  let currentListType = null;
  let currentListItems = [];

  blocks.forEach((block, index) => {
    // Check if this is a list item
    if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
      // If we're starting a new list or changing list types
      if (currentListType !== block.type) {
        // If we have existing list items, add them to rendered blocks
        if (currentListItems.length > 0) {
          renderedBlocks.push(
            <ul key={`list-${index}`} className={currentListType === 'numbered_list_item' ? 'list-decimal' : 'list-disc'}>
              {currentListItems}
            </ul>
          );
          currentListItems = [];
        }
        currentListType = block.type;
      }
      
      // Add this item to the current list
      currentListItems.push(<NotionBlock key={block.id} block={block} />);
    } else {
      // This is not a list item
      
      // If we have existing list items, add them to rendered blocks
      if (currentListItems.length > 0) {
        renderedBlocks.push(
          <ul key={`list-${index}`} className={currentListType === 'numbered_list_item' ? 'list-decimal' : 'list-disc'}>
            {currentListItems}
          </ul>
        );
        currentListItems = [];
        currentListType = null;
      }
      
      // Add this non-list block
      renderedBlocks.push(<NotionBlock key={block.id} block={block} />);
    }
  });
  
  // If we have any remaining list items at the end
  if (currentListItems.length > 0) {
    renderedBlocks.push(
      <ul key="list-end" className={currentListType === 'numbered_list_item' ? 'list-decimal' : 'list-disc'}>
        {currentListItems}
      </ul>
    );
  }

  return (
    <div className="notion-content">
      {renderedBlocks}
    </div>
  );
}
