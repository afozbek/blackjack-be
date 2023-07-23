import fs from "fs";
const dataPath = "./database/data.json";

const getScoreBoard = async () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData.toString());
};

const saveScore = async (scoreData: any) => {
  const stringifyData = JSON.stringify(scoreData);
  fs.writeFileSync(dataPath, stringifyData);
};

export { getScoreBoard, saveScore };
