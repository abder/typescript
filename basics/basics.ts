let userName: string = "Jack";
let hasLoggedIn: string = "test";
hasLoggedIn += " Herrington";
console.log(hasLoggedIn);

const exampleArray: (number | boolean)[] = [1, 2, true];
let nullVariable: null;

function add(val1: unknown, val2: unknown) {
  // We use type guards (typeof checks) to narrow down the potential types of value and perform different actions based on its inferred type, it's forced by typescript for "unknown" type which is why unkown is safer than "any"
  if (typeof val1 === "number" && typeof val2 === "number") {
    return val1 + val2;
  } else {
    return "Invalid Types of Parameters";
  }
}

const testRegex: RegExp = /[a-z]/;

const testDate: Date = new Date();

const fullName = {
  firstName: "Abder",
  lastName: "DOUARA",
};

const $element = document.getElementById("test");

const ids = {
  10: "a",
  20: "b",
};

let title: string | number = "James";

title = 1;

interface User {
  id: string;
  name: string;
}

const fetchUsers = (): Promise<User[]> =>
  fetch("/api/users").then((response) => response.json());

interface Person {
  readonly name: string;
  email: string;
}

type ReadOnlyPerson = Readonly<Person>;

const ahmed: Person = {
  name: "ahmed",
  email: "ahmed@gmail.com",
};

ahmed.email = "ahmed salim";

// Generics
interface Add<T> {
  (x: T, y: T): T;
}

const addNumbers: Add<number> = (x, y) => {
  return x + y;
};

// Intersection operator
type color = { red: "red" };
type grays = { red: "gray" };

type allColors = color | grays;

const red: allColors = { red: "gray" };

console.log("red", red);
