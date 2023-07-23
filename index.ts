import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  getScoreBoard,
  addScore,
  RoundCondition,
  Round,
} from "./utils/index.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const router = express.Router();

app.get("/getScores", (req: Request, res: Response) => {
  const scoreBoard = getScoreBoard();
  // console.log({ scoreBoard });

  res.json({ scoreBoard });
});

app.post("/submitScore", (req: Request, res: Response) => {
  const { deck, condition } = req.body as Round;

  addScore({ deck, condition });
  console.log(req.body);

  res.json({ submitted: true });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
