console.log("Linked List Data Structure")

// this linked list data structure support three main operations.
// Insertion - To add an element at the beginning, end or at the give index in the list
// Deletion - To delete an element given its index or value.
// Search - To find element given its value.


const { log } = require("console");

console.log("LinkedList DataStructure");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Adding node at the start of linked list
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Insert node at the index of linked list.
  insert(value, index){
    if(index < 0 || index > this.size){
      return
    }

    // let index === 0 so we add node at the fist of linked list.
    if(index === 0){
      this.prepend(value)
    } else {
      // create the new instance of node.
      let node = new Node(value)
      // assume that the prev is head node.
      let prev = this.head;
      for(let i=0; i < index - 1; i++){
        prev = prev.next
      }
      node.next = prev.next;
      prev.next = node
      this.size++
    }
  }

  // Adding node at the end of linked list
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  // Print all the linked list values.
  print() {
    if (this.isEmpty()) {
      console.log("Node list empty.");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log("valus", listValues);
    }
  }
}

const list = new LinkedList();

// console.log("list is empty?", list.isEmpty());
// console.log("list size ", list.getSize());

// list.print()

//add value at the start of the list
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()

// adding value at the end of the node.
list.print();
list.append(10);
list.print();
list.append(20);
list.append(30);
list.print();

// insert value at specific index.
list.insert(5, 0);
list.print();
list.insert(15, 2);
list.print();









