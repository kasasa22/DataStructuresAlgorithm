class myArray{
    constructor(){
        this.length =0;
        this.data={};
    }
    push(item) {

        this.data[this.length]=item;
        this.length++
        return this.length;

    }
    get(x){
       return this.data[x];

    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1]
        this.length--
        return lastItem;
    }
    shift(){
        const firstItem = this.data[0];

        //re-indexing
        for (let i =0; i <this.length; i++){
            this.data[i]=this.data[i+1];

        }

        delete this.data[this.length-1]
        this.length--
        return firstItem


    }

    delete(i){
        const item = this.data[i]
        delete this.data[i];
        for (let i =0; i <this.length; i++){
            this.data[i]=this.data[i+1];

        }


        delete this.data[this.length-1]
        this.length--
        return item



    }



}

const myNewArray = new myArray;

myNewArray.push('apple')
myNewArray.push('tomatoe')
myNewArray.push('orange')   
myNewArray.push('onion')   
myNewArray.push('mango')   
myNewArray.push('banana')
myNewArray.pop()

console.log (myNewArray)

console.log(myNewArray.shift())

console.log(myNewArray)

console.log(myNewArray.delete(3))

console.log(myNewArray)