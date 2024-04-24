import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import cors from "cors";

app.use(cors({
  credentials: true,
  origin: true,
}));

import studentsRouter from "./routers/studentsRouter.js";
app.use(studentsRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on:", PORT));