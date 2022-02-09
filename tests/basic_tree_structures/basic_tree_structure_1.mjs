import { Tree } from "../../tree.mjs";

let input = [5,7,2131345646,9,4,13,12415486];

let t = new Tree((a,b) => a > b);

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
