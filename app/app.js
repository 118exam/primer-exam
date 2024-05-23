import express from "express";
import { config } from "dotenv";
config();

const app = express();

app.set("port", process.env.PORT || 3000);

export default app;