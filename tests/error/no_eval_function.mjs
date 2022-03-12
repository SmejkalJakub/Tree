/**
 * Test to check if there is an error when no evaluation function is provided
 */

import { Tree } from "../../tree.mjs";

let input = [31, 6, 11, 21, 18, 47];

let t = new Tree();

try{
	input.forEach(i => t.insertValue(i));
}
catch(TypeError){
	console.log("No evaluation function!");
}