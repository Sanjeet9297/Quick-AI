import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRouter from "./routes/aiRoutes.js";
import connectCloudinary from "./configs/cloudnary.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

await connectCloudinary();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://quick-ai-t7ov.vercel.app",
      "https://quick-ai-projectt.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Server is Live!");
});

app.use(requireAuth());

// requireAuth();

app.use("/api/ai", aiRouter);
app.use("/api/user", userRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
