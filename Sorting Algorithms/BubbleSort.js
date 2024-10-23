function BubbleSort(arr){
    for (let i = arr.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
        
    }
    return arr; 

}

const arr= [3,5,6,4,1,2];
console.log(BubbleSort(arr))