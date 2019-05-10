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
    /*1. adddToHead/unshift
      2. addToTail/push
      3. insert/add_at
      4. removeHead/shift
      5. removeTail/pop
      6. delete
      7. indexOf
      8.isEmpty
      9.size
      10.find/get
      11.findePrevious
      12.display
      13. set
    */
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
    addToTail(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }
    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }  
        this.length++;
    }
    addToHead(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }  
        this.length++;
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false
        if(index === 0){
            this.unshift(value);
            return true;
        }
        if(index === this.length){
            this.push(value);
            return true;
        }
        let newNode = new Node(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next= newNode;
        newNode.next = afterNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return false
        if(index === 0){
            this.shift(value);
            return true;
        }
        if(index === this.length-1){
            this.pop(value);
            return true;
        }
        let beforeNode = this.get(index - 1);
        let removed = beforeNode.next;
        beforeNode.next = removed.next;
        this.length--;

        return removed;
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
        return temp;
    }
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return temp;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let foundIndex = 0;
        let current = this.head;
        while (foundIndex !== index) {
            current = current.next;
            foundIndex++
        }
        return current;
    }
    set(index, data){
        let item = this.get(index);
        if(item) {
            item.value = data;
            return true
        }
        return false;
    }

    reverse(){
        if (this.length === 0) return undefined
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let previousNode = null;
        let nextNode = null;
        while(currentNode){
            nextNode = currentNode.next
            currentNode.next = previousNode
            previousNode = currentNode
            currentNode = nextNode
        }
    }

    print(){
        const arr=[]
        let current = this.head
        while(current){
            arr.push(current.value)
            current = current.next
        }
        console.log(arr)
    }
}

let list = new SinglyLinkedList();