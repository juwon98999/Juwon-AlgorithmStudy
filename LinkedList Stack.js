class Node{
    constructor(top){
      this.top = top;
      this.nextNode = null;
    }
    setNextNode(node){
      this.nextNode = node;
    }
  }
  
  class Stack{
      constructor(){
        this.head = null;
        this.length = 0;
      }
  
      Push(top)
    {
        let node = new Node(top);
        if(this.head == null)
          this.head = node;
          else{
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
          }
            currentNode.next = node;
        }
        this.length++;
    }
  
      Pop()
    {
        let current = this.head;
        let result = current;
        if(current == null) return;
        while(current.next != null){
            result = current;
            current = current.next;
        }
        result.next = null;
        this.length --;
        return current;
    }

    read() {
        let arr = [];
        let current = this.head;
        while (current) {
          arr.push(current);
          current = current.next;
        }
        return arr;
      }

  }
  
  
var stack = new Stack(top);
var stack2 = new Stack(top);
var stack3 = new Stack(top);
stack.Push("■■■■■■■");
stack.Push("□■■■■■□");
stack.Push("□□■■■□□");
stack.Push("□□□■□□□");


console.log(stack.read());
console.log(stack);
console.log(stack2);
console.log(stack3);


function Draw(){
    let left = document.getElementById("left_top");
    let middle = document.getElementById("middle_top");
    let right = document.getElementById("right_top");

    while ( right.hasChildNodes() ) 
    { right.removeChild( left.lastChild ); }

    for(var i=0;i<this.length;i++){
        let ptag = document.createElement('p');
        ptag.appendChild(document.createTextNode(node));
        left.appendChild(ptag);
    }  
}

var onFirstTopClick = () =>{
    stack2.Push(stack.Pop());
}

var onSecondTopClick = () =>{
    stack3.Push(stack2.Pop());
}

var onThirdTopClick = () =>{
    stack2.Push(stack3.Pop());
}


