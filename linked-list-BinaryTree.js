class Node{
    constructor(data,left,right){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class LinkedList{
    constructor(){
        this.root = null;
        this.length = 0;
    }

    binarytree(data){
        var node = new Node(data)
          if(this.root == null){
              this.root = node;
              return this;
          }
       let current = this.root;
       while (current) {
           if(data < current.data){
               if(current.left == null){
                   current.left = node;
                   return this;
               }
               current =current.left;
           }else{
                if(current.right == null){
                   current.right = node;
                 return this;
                }
                current =current.right;
           }
       }
    }

      binaryread() {
        const result = [];
        function search(node) {
          result.push(node.data);
          if (node.left !== null) search(node.left);
          if (node.right !== null) search(node.right);
        }
        search(this.root);
        return result;
    }

}

let binarytreeList = new LinkedList();
binarytreeList.binarytree(5);
binarytreeList.binarytree(7);
binarytreeList.binarytree(4);
binarytreeList.binarytree(1);
binarytreeList.binarytree(3);
binarytreeList.binarytree(8);
binarytreeList.binarytree(6);
console.log(binarytreeList.binaryread());
console.log(binarytreeList);

