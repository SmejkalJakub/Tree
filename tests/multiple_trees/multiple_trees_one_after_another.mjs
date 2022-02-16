import { Tree } from "../../tree.mjs";

let input = [31, 6, 11, 21, 18, 47];

let t = new Tree((a,b) => a === b);

input.forEach(i => t.insertValue(i));

console.log("preorder")
for (let n of t.preorder()) {
	console.log(n);
}

console.log("inorder")
for (let n of t.inorder()) {
	console.log(n);
}

console.log("postorder")
for (let n of t.postorder()) {
	console.log(n);
}

console.log("---------------------------------------------------------------")

let input2 = ["krzMD", "iUjnw", "NPHcU", "nwSNo", "FRVYp", "YWKXu"];

let t2 = new Tree((a,b) => a === b);

input2.forEach(i => t2.insertValue(i));

console.log("preorder")
for (let n of t2.preorder()) {
	console.log(n);
}

console.log("inorder")
for (let n of t2.inorder()) {
	console.log(n);
}

console.log("postorder")
for (let n of t2.postorder()) {
	console.log(n);
}

