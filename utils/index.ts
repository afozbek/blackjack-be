import fs from "fs";

export interface Round {
  condition: RoundCondition;
  deck: Deck;
  score: number;
}

export enum RoundCondition {
  PlayerWon = "PlayerWon",
  DealerWon = "DealerWon",
  Draw = "Draw",
}

type Deck = Card[];

export interface Card {
  id: string;
  cardType: CardTypes;
  face: string;
}

export enum CardTypes {
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Hearts = "Hearts",
  Spades = "Spades",
}

interface Database {
  rounds: Round[];
}

const DATABASE_FILE = "database/data.json";

// Initialize the database with an empty "rounds" array
let database: Database = { rounds: [] };

// Function to read the database file and load the data into the "database" variable
const loadDatabase = () => {
  try {
    const data = fs.readFileSync(DATABASE_FILE, "utf8");
    database = JSON.parse(data);
  } catch (err: any) {
    console.error("Error loading database:", err.message);
  }
};

// Function to save the "database" variable into the database file
const saveDatabase = () => {
  try {
    const data = JSON.stringify(database, null, 2);
    fs.writeFileSync(DATABASE_FILE, data, "utf8");
  } catch (err: any) {
    console.error("Error saving database:", err.message);
  }
};

// Getter function to retrieve the "rounds" array from the database
const getScoreBoard = (): Round[] => {
  return database.rounds;
};

// Setter function to add a new round object to the "rounds" array
const addScore = (round: Round) => {
  database.rounds.push(round);
  saveDatabase(); // Save the database after adding a new round

  return database.rounds;
};

// Example usage:
loadDatabase(); // Load the database on application startup

export { getScoreBoard, addScore };
