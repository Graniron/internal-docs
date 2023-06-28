import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";;
import { marked } from 'marked';

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getNotionContent = async (pageId: string) => {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  const pageContent = marked.parse(mdString.parent);

  return pageContent;
};
