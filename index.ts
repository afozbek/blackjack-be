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

app.get("/getScores", (req: Request, res: Response) => {
  const scoreBoard = getScoreBoard();

  res.json({ scoreBoard });
});

app.post("/submitScore", (req: Request, res: Response) => {
  const { deck, condition, score } = req.body as Round;

  // Validations may be added later

  const newRounds = addScore({ deck, condition, score });
  console.log(req.body);

  res.json({ scoreBoard: newRounds });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
