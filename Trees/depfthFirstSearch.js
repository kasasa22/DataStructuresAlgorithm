class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    //insert method
    insert(value){
         const newNode = new Node(value);

         if (this.root===null){
             this.root = newNode;
             return this;
         }
         let temp = this.root;
         while(true){
            if(newNode.value === temp.value){
                  return undefined; 

            }
            if(newNode.value< temp.value){
                if( temp.left===null){
                    temp.left = newNode
                 return this;
                }else{
                    temp = temp.left
                }
            }else{
                if(temp.right ===null){
                    temp.right = newNode;
                    return this;
                }else{
                    temp = temp.right
                }
                
            } 
         }
    }

    //breadthfirstSearch
    bfs(){
         const current = this.root;

         let queue = [];

         let data =[];

         queue.push(current);

         while(queue.length){
            const current = queue.shift()
            data.push(current.value);
             
            if(current.left) queue.push(current.left)

            if(current.right) queue.push(current.right)

         }

         return data;

          

    }

    //depthFirstSearch pre-order
    dfsPreOrder(node =this.root ,data=[]){
        if(node===null)  return data;
        console.log(data)
        data.push(node.value);

        if(node.left){ this.dfsPreOrder(node.left,data)}

        if(node.right) this.dfsPreOrder(node.right, data)


        return data;
    }

    //depth first search post order
    dfsPostOrder(node = this.root, data = []) {
        if (node === null) return data;
        
       
    
        if (node.left) this.dfsPostOrder(node.left, data);
        
        if (node.right) this.dfsPostOrder (node.right, data);
        data.push(node.value);
        
        return data;
    }

    //depth first search in-Order
    dfsInOrder(node = this.root, data = []) {
        if (node === null) return data;
        
       
    
        if (node.left) this.dfsInOrder(node.left, data);

        data.push(node.value);
        
        if (node.right) this.dfsInOrder (node.right, data);
        
        
        return data;
    }

    
} 


const tree = new BST
tree.insert(5)
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7); 
tree.insert(9)

//console.log(tree.bfs())
//console.log(tree.dfsPreOrder())
//console.log(tree.dfsPostOrder())

console.log(tree.dfsInOrder())