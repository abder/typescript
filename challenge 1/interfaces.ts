import * as fs from "fs";

// Read the JSON file
const filePath = "./houses.json"; // Specify the path to your JSON file
const jsonData = fs.readFileSync(filePath, "utf-8");

// Parse the JSON data
const parsedData = JSON.parse(jsonData);

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  console.log(typeof houses);
  return houses
    .filter(filter || ((house) => true))
    .map((house) => ({ id: houses.indexOf(house), ...house }));
}

console.log(
  findHouses(JSON.stringify(parsedData), ({ name }) => name === "Atreides")
);

console.log(findHouses(parsedData, ({ name }) => name === "Harkonnen"));
