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
    pop(){
        if(!this.head){
            return undefined
        }


        let prev = this.head;
        let temp = this.head;

        while(temp.next){
            prev = temp;
            temp=prev.next
        }

        this.tail = prev;
        this.tail.next= null;
        this.length--;

        if(this.length===0){
            this.head=null;
            this.tail= null;

        }

        return temp; 
    }
    unshift(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }

        newNode.next = this.head; 
        this.head = newNode

        this.length++
        return this;

    }
    shift(){
        if(!this.head){
            return undefined
        }

         
        const temp = this.head
        this.head = this.head.next
        temp.next = null;
        this.length--;

        if (this.length===0){
            this.head = null;
            this.tail =null;
        }
        return temp;

    }
    getFirst(){
        if(!this.head){
            return undefined
        }
        return this.head
    }
     getlast(){
        if(!this.head){
            return undefined
        }

        let temp = this.head
        while(temp){
            if(!temp.next){
                return temp
            }
            temp = temp.next
        }
     }

     get(index){
        let counter = 0;
        let temp = this.head

        while(temp){
            if(counter===index){
                return temp
            }
           
            counter++;
            temp = temp.next;


        }
        return null
     }

     set(index, value){
       let temp=this.get(index);

       if(temp){
        temp.value = value
        return true
       }
       return false;
        
     }

     insert(index,value){
        if(index===0){
            this.unshift(value)
        }
        if (index==this.length){
            this.push(value)
        }

        const newNode = new Node(value);
        const temp = this.get(index-1)
        temp.next = newNode;
        newNode.next = temp.next

     }

     size(){
        let counter = 0 ;
        let temp = this.head

        while(temp){
            counter++
            temp= temp.next
        }
        return counter;
     }
     clear(){
        this.head = null;
        this.tail= null; 
        this.length=0; 
       
     }


}

const myLinkedList = new LinkedList(1)
myLinkedList.push(4)
myLinkedList.push(7)
myLinkedList.pop() 
myLinkedList.unshift(7)

console.log(myLinkedList.clear());
console.log(myLinkedList)
