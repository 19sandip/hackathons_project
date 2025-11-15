import { createServer } from "node:http";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  runMultiAgent  from "./src/agents/architechture.agent.js";
dotenv.config();

const app = express();
const port = process.env.port || 2025;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = createServer(app);

app.post("/explain", async (req, res) => {
  const {repoUrl} = req.body;
const question = "How does this repo handle routing?";
console.log(repoUrl)
const result = await runMultiAgent(repoUrl, question);
res.json(result);
})



//

const start = async () => {
  //   await mongoose.connect(MONGO_URI);
  //   console.log("database connected");
  server.listen(port, () => {
    console.log(`server is running on the port: ${port}`);
  });
};

start();
