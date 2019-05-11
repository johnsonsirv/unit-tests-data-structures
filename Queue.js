/* Implementing Queue (FIFO -First-In-First-Out 
    Using an Linked List to keep track of the internal workings of the Queue
*/
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return temp.value;
    }

}

class Queue{
    constructor(){
        this.list = new SinglyLinkedList
    }
    //push method, adds an item to the end of the queue
    push(value){
        this.list.push(value)
    }

    //pop method, removes item from the begining of the queue
    pop(){
        return this.list.shift()
    }
}

const queue = new Queue
queue.push(3)
queue.push(5)
//returns 3

queue.push(2)
queue.push(7)
console.log(queue.pop())
//returns 5
console.log(queue.pop())
//returns 2
console.log(queue.pop())
// returns 7