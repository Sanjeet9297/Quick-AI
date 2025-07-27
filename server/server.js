import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Live!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
