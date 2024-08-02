console.log("Queue DataStructure")

// class Queue {
//     constructor(){
//         this.items = []
//     }
    
//     // add element to the queue.
//     enqueue(element){
//       return this.items.push(element)
//     }
    
//     // remove the element fron the queue.
//     dequeue(){
//       return this.items.shift()
//     }
    
//     // check that the queue is empty.
//     isEmpty(){
//         return this.items.length === 0
//     }
    
//     // find the peek element from queue.
//     peek(){
//         if(!this.isEmpty()){
//           return this.items[0]
//         }
//         return null
//     }
    
//     // find the size of queue.
//     size(){
//         return this.items.length
//     }
    
//     // print the queue element.
//     print(){
//       return console.log('items',this.items.toString())
//     }
// }


// const queue = new Queue()


// // check that the queue is empty or not.
// console.log('isEmpty', queue.isEmpty())

// // add element to the queue.
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// // remove element from the queue.
// queue.dequeue()

// // find the peek element fron the queue. 
// console.log('peek',queue.peek()) // 20, because 10 is removed from the queue.
// // check the length of the queue.
// console.log('length', queue.size())
// // print the element of the queue.
// console.log("queue", queue.print())



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The above queue process have linear time complexity So we apply aother approach
// by using object which have constant time complexity.

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0; // adding index of queue which is initially 0.
        this.front = 0 // removing point of the quue which is initially 0.
    }
    
    // method to add element in the queue.
    enqueue(element:any){
        this.items[this.rear] = element;
        this.rear++
    }
    
    // remove element from the queue.
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    
    isEmpty(){
        return this.rear - this.front === 0
    }
    
    peek(){
        return this.items[this.front]
    }
    
    size(){
        return this.rear - this.front
    }
    print(){
       return this.items
    }

}

let queue = new Queue()

queue.enqueue(24)
queue.enqueue(25)
queue.enqueue(26)



console.log('ans', queue.print())