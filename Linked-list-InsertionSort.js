
function Node(data, next){
        this.data = data;
        this.next = next;
}

function insertionSort(node) {
    let new_node = node;
    node = node.next;
    new_node.next = null;

    while(node != null) {
        let current = node;
        node = node.next;
        if (current.data < new_node.data) {
            current.next = new_node;
            new_node = current;
        } else {
            let search = new_node;
            while(search.next != null && current.data > search.next.data)
            search = search.next;
            current.next = search.next;
            search.next = current;
        }
    }
    return new_node;
}


function read(node) {
    let arr = [];
    while(node != null) {
        arr.push(node.data);
        node = node.next;
    }
    return arr;
}

let linkednewList = new Node(5,new Node(7,new Node(4,new Node(1,new Node(9,)))));

console.log(read(linkednewList));
console.log(linkednewList);
let insertion = insertionSort(linkednewList);
console.log(read(insertion));
console.log(insertion);

