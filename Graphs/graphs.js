class Graph{
    constructor(){
        this.adjacencyList={};
    }

    //vertex or Nodes
    addVertex(vtx){
        if(!this.adjacencyList[vtx]){
            this.adjacencyList[vtx]=[]
            return true
        }
        return false
    }

    //connection or edges
    addEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1]&&this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);

            return true

        }
        return false 
    }
    //remove a connection
    removeEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1]&&this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(v=>v!==vtx2);
            this.adjacencyList[vtx2] = this.adjacencyList[vtx1].filter(v=>v!==vtx1);
            return true
        }
        return false;
    }

    //remove vertex
    removeVertex(vtx){
         if(!this.adjacencyList[vtx]) return undefined;
         for(let n of this.adjacencyList[vtx]){
            this.adjacencyList[n] = this.adjacencyList[vtx].filter(v=>v!==vtx);

         }
         delete this.adjacencyList[vtx];
         return this;


    }

}

const g = new Graph
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D')
g.addEdge('A','B');
g.addEdge('A','D');
g.addEdge('B','C');
g.addEdge('C','D')
g.removeEdge('A','D')
g.removeVertex("D ")
console.log(g)