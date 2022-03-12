/**
 * Test to test the implementation on integer values with equal evaluation function
 */

import { Tree } from "../../../tree.mjs";

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
