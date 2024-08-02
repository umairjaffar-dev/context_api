console.log("Linked List Data Structure")

// this linked list data structure support three main operations.
// Insertion - To add an element at the beginning, end or at the give index in the list
// Deletion - To delete an element given its index or value.
// Search - To find element given its value.


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    isEmpty(){
        return this.size === 0;
    }
    
    getSize(){
        return this.size;
    }
    
    // Adding node to the list
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
}

const list = new LinkedList()

console.log('list is empty?', list.isEmpty())
console.log('list size ', list.getSize())









