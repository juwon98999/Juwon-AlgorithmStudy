class Node{
    constructor(data){
        this.data = data;
        this.nextNode = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
        
    }

    append(data){
        let node = new Node(data);
        let current = this.head;
        if(!current){
            this.head = node;
        }else{
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
        return node;
    }


    printListData() {
        let current = this.head; 
          
      while (current != null) {
            console.log(current.data);
            current = current.next;
         }
     }

     bubbleSort(){
         let changeNum;
         for(let current = this.head; current.next !=null; current = current.next){
             for(let index = current.next; index != null; index = index.next){
                 if(current.data > index.data){
                     changeNum = current.data;
                     current.data = index.data;
                     index.data = changeNum;
                 }
             }
         }

     }
         

     read() {
        let arr = [];
        let current = this.head;
        while (current) {
          arr.push(current.data);
          current = current.next;
        }
        return arr;
      }

}

let linkednewList = new LinkedList();
linkednewList.append(5);
linkednewList.append(7);
linkednewList.append(4);
linkednewList.append(1);
linkednewList.append(9);

console.log(linkednewList.read());
console.log(linkednewList);

linkednewList.bubbleSort();

console.log(linkednewList.read());
console.log(linkednewList);

