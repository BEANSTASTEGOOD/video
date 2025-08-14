// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // allow frontend to call
app.use(express.json());

app.post("/proxy", async (req, res) => {
  const response = await fetch("https://api.replicate.com/v1/models/minimax/video-01-director/predictions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer YOUR_API_KEY`,
      "Content-Type": "application/json",
      "Prefer": "wait"
    },
    body: JSON.stringify(req.body)
  });
  res.json(await response.json());
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
