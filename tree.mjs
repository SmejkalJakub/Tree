export class Tree {
    constructor(eval_function){
        this.eval_function = eval_function;
        this.root = null;
    }

    insertValue(value, node = this.root){
        var node = new Node(value);

        if(this.root == null){
            this.root = node;
        }
        else{
            this.insertNode(this.root, node);
        }   
    }

    insertNode(node, newNode){
        if(this.eval_function(node.value, newNode.value)){
            if(node.left === null){
                node.left = newNode;
            }
            else{
                this.insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right === null){
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    *preorder(node = this.root){
        if(node !== null){
            yield node.value;
            yield* this.preorder(node.left);
            yield* this.preorder(node.right);
        }
    }

    *inorder(node = this.root){
        if(node !== null){
            yield* this.inorder(node.left);
            yield node.value;
            yield* this.inorder(node.right);
        }
    }

    *postorder(node = this.root){
        if(node !== null){
            yield* this.postorder(node.left);
            yield* this.postorder(node.right);
            yield node.value;
        }   
    }
}

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }