class Node{
    constructor(value){
        this.head = value;
        this.next = null 
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head
        this.length = 1;


    }
    push(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head= newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

}

const myLinkedList = new LinkedList(1)
myLinkedList.push(4)
myLinkedList.push(7)
console.log(myLinkedList)