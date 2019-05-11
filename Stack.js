// Implementing Stack (LIFO - Last-In-First-Out)
/* Using an Linked List to keep track of the internal workings of the Stack*/
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
    pop(){
        if(!this.head) return undefined;
        let newTail = this.head;
        let temp = newTail;
        while(temp.next!=null){
            newTail = temp;
            temp = temp.next
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        this.tail = newTail;
        this.tail.next= null;
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return temp.value;
    }
}

class Stack{
    constructor(){
        this.list = new SinglyLinkedList
    }
    //Push method, adss an item to the stack
    push(data){
        this.list.push(data)
    }

    // Pop method removes the last item added to the stack
    pop(){
        
    }
}