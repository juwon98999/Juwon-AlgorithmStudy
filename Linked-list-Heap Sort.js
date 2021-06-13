class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.length = 1;
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

    heapSort(){   
        let current = this.root;
        let currentleft = current.left;
        let currentright = current.right;
        let curright = currentleft.left.right;
        let changeNum;

        if(curright.data < currentleft.data){
            if(curright != null){
                changeNum = curright.data; 
                curright.data = currentleft.data;
                currentleft.data = changeNum;
                return this;
            }
            currentleft = curright;
        }else
       if(currentleft.left.data < currentleft.data){
                if(currentleft.left != null){
                    changeNum = currentleft.left.data; 
                    currentleft.left.data = currentleft.data;
                    currentleft.data = changeNum;
                    return this;  
                }
                currentleft = currentleft.left;
            } 
            
            if(currentright.data < currentleft.data){
                if(currentright != null){
                    changeNum = currentright.data; 
                    currentright.data = currentleft.data;
                    currentright.data = changeNum;
                    return this;
                }
                current = currentright;
            } else
            if(currentleft.data < current.data){
                if(currentleft != null){
                    changeNum = currentleft.data; 
                    currentleft.data = current.data;
                    current.data = changeNum;
                    return this;  
                }
                current = currentleft;   
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

let binarytreeList = new Node();
binarytreeList.binarytree(5);
binarytreeList.binarytree(7);
binarytreeList.binarytree(4);
binarytreeList.binarytree(1);
binarytreeList.binarytree(3);
binarytreeList.binarytree(8);
console.log(binarytreeList.binaryread());
console.log(binarytreeList);


binarytreeList.heapSort();
console.log(binarytreeList.binaryread());
console.log(binarytreeList);

binarytreeList.heapSort();
console.log(binarytreeList.binaryread());
console.log(binarytreeList);

binarytreeList.heapSort();
console.log(binarytreeList.binaryread());
console.log(binarytreeList);

binarytreeList.heapSort();
console.log(binarytreeList.binaryread());
console.log(binarytreeList);

binarytreeList.heapSort();
console.log(binarytreeList.binaryread());
console.log(binarytreeList);

