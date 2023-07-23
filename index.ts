import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const data = "./database/data.json";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

router.get("/getScores", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

router.post("/submitScore", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
