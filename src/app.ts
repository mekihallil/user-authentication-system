import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/auth.routers.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export default app;
