export class Tree {
    constructor(eval_function){
        this.eval_function = eval_function;
        this.root = null;
    }

    insertValue(value){
        var node = new Node(value);

        if(this.root == null){
            this.root = node;
        }
        else{
            
        }
    }

    *preorder(node = this.root){
        yield node.value;
        if(node !== null){
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
        }   
        yield node.value
    }
    
}

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }