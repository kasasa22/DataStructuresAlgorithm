class Node{
    constructor(value){
        this.head= value;
        this.tail=null;
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail= this.head;
        length = 1;
    }
}