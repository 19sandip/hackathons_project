// agents/fileSummarizer.agent.js
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";
dotenv.config();

const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
 model: "gemini-2.0-flash",
});
console.log("API KEY:", process.env.GOOGLE_API_KEY);


export async function fileSummarizerAgent(repoSummary) {
  return await model.invoke([
    {
      role: "user",
      content: `Give a file-by-file explanation of this GitHub project:\n${repoSummary}`,
    },
  ]);
}
