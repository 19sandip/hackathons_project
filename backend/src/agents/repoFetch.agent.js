// agents/repoFetch.agent.js
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-2.0-flash",
});

export async function repoFetchAgent(repoUrl) {
  const apiUrl = repoUrl.replace("https://github.com/", "https://api.github.com/repos/");
  const treeUrl = `${apiUrl}/git/trees/main?recursive=1`;

  const response = await fetch(treeUrl);
  const json = await response.json();

  return await model.invoke([
    {
      role: "user",
      content: `Summarize this GitHub repo structure:\n${JSON.stringify(json.tree)}`,
    },
  ]);
}
