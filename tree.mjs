/** 
 * @module Tree 
 */

/**
 * @constructor
 * @param {Function} evalFunction - This functions decides 
 * if the new value should be added to the left or right subtree. 
 * It should have 2 parameters and return True/False. 
 * If the function returns True, new value will be added to the left subtree, 
 * otherwise it will be added to the right subtree.
 */
export function Tree(evalFunction) {
    this.evalFunction = evalFunction;

    /**
     * Root node of the created Tree
     * @type {TreeNode}
     */
    this.root = null;
    
    /**
     * This function takes care of inserting new nodes to the tree.
     * If there is no root it will just create it. Otherwise it will start recursion
     * that will insert the node to the tree based on the specified evalFunction.
     * @param {any} value - specified value that the new node should have
     */
    this.insertValue = function(value){
        let newNode = new TreeNode(value);
        
        if(this.root === null){
            this.root = newNode
        }
        else{
            this.root.insertTreeNode(newNode, this.evalFunction);
        }   
    }

    /**
     * Function that creates generator for traversing the tree in preorder manner
     * @returns {Generator} - Generator for traversing the tree in preorder manner
     */
    this.preorder = function(){
        return this.preorder.prototype.next(this.root);
    }

    this.preorder.prototype.next = function* (node){
        if(node !== null){
            yield node.value;
            yield* this.next(node.leftChild);
            yield* this.next(node.rightChild);
        }
    }

    /**
     * Function that creates generator for traversing the tree in inorder manner
     * @returns {Generator} - Generator for traversing the tree in inorder manner
     */
    this.inorder = function(){
        return this.inorder.prototype.next(this.root);
    }

    this.inorder.prototype.next = function* (node){
        if(node !== null){
            yield* this.next(node.leftChild);
            yield node.value;
            yield* this.next(node.rightChild);
        }
    }

    /**
     * Function that creates generator for traversing the tree in postorder manner
     * @returns {Generator} - Generator for traversing the tree in postorder manner
     */
    this.postorder = function(){
        return this.postorder.prototype.next(this.root);
    }

    this.postorder.prototype.next = function* (node){
        if(node !== null){
            yield* this.next(node.leftChild);
            yield* this.next(node.rightChild);
            yield node.value;
        }   
    }
}

/**
 * Representation of the tree node
 * @constructor
 * @param {any} value - value that should be stored in the TreeNode
 */
function TreeNode(value) {
    /**
     * Value of the specific node
     * @type {any}
     */
    this.value = value;
    /**
     * Reference to the left child of the node
     * @type {TreeNode}
     */
    this.leftChild = null;
    /**
     * Reference to the right child of the node
     * @type {TreeNode}
     */
    this.rightChild = null;

    /**
     * Inserts new node to the tree. If the node should be inserted to the 
     * left or right subtree is decided on evalFunction.
     * If the selected child is empty, new node is inserted there. 
     * Otherwise this function is recursively called on selected subtree.
     * @param {TreeNode} newNode - new node that should be inserted
     * @param {Function} evalFunction - function that decides if new node should be inserted into left or right subtree
     */
     this.insertTreeNode = function(newNode, evalFunction) {
        if(evalFunction(newNode.value, this.value)){
            if(this.leftChild === null){
                this.leftChild = newNode;
            }
            else{
                this.leftChild.insertTreeNode(newNode, evalFunction);
            }
        }
        else{
            if(this.rightChild === null){
                this.rightChild = newNode;
            }
            else{
                this.rightChild.insertTreeNode(newNode, evalFunction);
            }
        }
    }
}