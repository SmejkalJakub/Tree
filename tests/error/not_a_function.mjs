import { Tree } from "../../tree.mjs";

let input = [31, 6, 11, 21, 18, 47];

let t = new Tree(42);

try{
	input.forEach(i => t.insertValue(i));
}
catch(TypeError){
	console.log("Not a valid evaluation function!");
}