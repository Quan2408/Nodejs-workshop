import express from "express";
import { connectDB } from "./config/db";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";

const app = express();
app.use(express.json());
app.use("/api", productRouter);
app.use("/api", authRouter);
connectDB();
export const viteNodeApp = app;
