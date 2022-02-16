import { Tree } from "../../../tree.mjs";

let input = ["krzMD", "iUjnw", "NPHcU", "nwSNo", "FRVYp", "YWKXu"];

let t = new Tree((a,b) => a < b);

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
