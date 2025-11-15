"use client";

<<<<<<< HEAD
const page = () => {
  return (
    <div>
      
    </div>
  )
=======
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "../components/Header"

export default function HomePage() {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = async () => {
    if (!repoUrl.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl }),
      });

      const data = await res.json();
      console.log("Response:", data);
      // show result later in step 2
    } catch (err) {
      console.log(err);
    }
  };

  return ( 
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Header /> 

      {/* PAGE CONTENT */}
      <div className="flex flex-col items-center justify-center flex-1 px-6">
        <div className="w-full max-w-lg space-y-4">
          <h1 className="text-2xl font-bold text-center">
            Enter a GitHub Repository Link
          </h1>

          <Input
            placeholder="https://github.com/user/repo"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
          />

          <Button className="w-full" onClick={handleSubmit}>
            Explain Repository
          </Button>
        </div>
      </div>
    </div>
  );
>>>>>>> 7f30ea40f94775d0a31792bffbdaacbc026bc4d0
}
