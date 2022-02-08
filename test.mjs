import { Tree } from "./tree.mjs";

let t = new Tree((a,b) => a < b);

let input = [5];

input.forEach(i => t.insertValue(i));


