import { data } from "./data";

const input = data;

const elfCalories = input
  .split("\n\n")
  .map(group =>
    group
      .split("\n")
      .map(num => parseInt(num))
      .reduce((acc, cur) => acc + cur, 0)
  );
const result = Math.max(...elfCalories);
console.log(result);
