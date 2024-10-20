class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.tail = null;

    }
}

class LinkedList{

    constructor(value){
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length=1;
    }

    push(value){
        const newNode = new Node(value)

        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }
        
       this.tail.next= newNode;
       this.tail = newNode;
       this.length++;
    }
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp;
        let prev = null;

        for (let i =0; i<this.length;i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;

        }

    }

}

const list = new LinkedList(2);
list.push(4);
console.log(list);
list.reverse()
console.log(list);