// workflow/multiAgentWorkflow.js
import { repoFetchAgent } from "../agents/repoFetch.agent.js";
import { fileSummarizerAgent } from "./fileSummarizer.agent.js";
import qnAAgent from "./QueAns.agent.js";
import dotenv from "dotenv";
dotenv.config();

export default async function runMultiAgent(repoUrl, userQuestion) {
  console.log("1️⃣ Fetching repo...");
  const repoData = await repoFetchAgent(repoUrl);
  const repoSummary = repoData.content;

  console.log("3️⃣ Summarizing files...");
  const fileSummary = await fileSummarizerAgent(repoSummary);

  console.log("4️⃣ QnA...");
  const answer = await qnAAgent(repoSummary, userQuestion);

  return {
    repoStructure: repoSummary,
    fileSummaries: fileSummary.content,
    answer: answer.content,
  };
}
