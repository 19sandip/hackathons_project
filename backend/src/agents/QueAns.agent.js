// agents/QnA.agent.js
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";
dotenv.config();

const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-2.0-flash",
});

export default async function qnAAgent(repoSummary, question) {
  return await model.invoke([
    {
      role: "user",
      content: `Based on this repo:\n${repoSummary}\n\nAnswer this question: ${question}`,
    },
  ]);
}
