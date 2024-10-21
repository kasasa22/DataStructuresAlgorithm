class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value);
         this.first = newNode;
         this.last = newNode;
         this.length = 1;
    }

    enqueue(value){
        const newNode = new Node(value)

        if (this.length===0){
            this.first=newNode;
            this.last = newNode;

        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++
        return this;

    }

    dequeue(){
        if(this.length ===0){
            undefined
        }
        if(this.length===1){
            this.first =null;
            this.last=null;
        }
        let temp = this.first
         

        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp; 
    }
  


}

const que = new Queue(1);
que.enqueue(2)
que.enqueue(3);

console.log(que);
que.dequeue()
console.log(que);