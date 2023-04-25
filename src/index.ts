import express from "express";
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { postsRouter } from "./routes";

dotenv.config();

const PORT = Number(process.env.PORT);

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use("/api", postsRouter);

app.listen(PORT, () => {
  console.log(`Api running on port ${PORT}`);
});
