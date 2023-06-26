import { marked } from 'marked';
import { base64ToString } from './base64-decoder';

const BASE_URL = `https://gitlab.com/api/v4/projects`;
const TOKEN = import.meta.env.GITLAB_TOKEN;
const DEFAULT_BRANCH = 'main';

export const getReadmeContent = async (projectId: string, branch = DEFAULT_BRANCH): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}/${projectId}/repository/files/README.md?access_token=${TOKEN}&ref=${branch}`);
    const responseDate = await response.json();
    const parsedContent =  base64ToString(responseDate.content);
    return marked.parse(parsedContent);
  } catch (error) {
    console.error(`Error during fetching Project: ${projectId}`, error);
    return 'Content Fetching Error';
  }
}