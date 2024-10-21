class Node{
     constructor(value){
        this.value = value;
        this.next = null;
     }

   
}

class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);

        if(this.length===0){
            this.first=newNode;
            
        }
        newNode.next = this.first;
        this.first = newNode
        
        this.length++;
        return this;
    }

    pop(){
        let temp = this.first;
        if(this.length===0){
            return undefined
        }
    
        this.first= this.first.next;
        temp.next = null;
        this.length--; 
        return temp;

    }
    minValue(){
        if(this.length===0){
            return undefined
        }

        let current = this.first;
        let min = current.value ;

       while(current.next){
        current = current.next

        if(current.value<min){
             console.log(current.value, min)
             min = current.value
        }
       }
       return min

    }
˜
}

const stk = new Stack(0);
stk.push(3)
stk.push(2)
stk.pop()
console.log(stk.minValue());