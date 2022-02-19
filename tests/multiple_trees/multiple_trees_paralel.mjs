import { Tree } from "../../tree.mjs";

let input = [31, 6, 11, 21, 18, 47];
let input2 = ["krzMD", "iUjnw", "NPHcU", "nwSNo", "FRVYp", "YWKXu"];

let t = new Tree((a,b) => a === b);
let t2 = new Tree((a,b) => a === b);

input.forEach(i => t.insertValue(i));
input2.forEach(i => t2.insertValue(i));

let inorder = t.inorder();
let inorder2 = t2.inorder();

for (let i = 0; i < input.length; i++)
{
    console.log(inorder.next().value);
    console.log(inorder2.next().value);
}