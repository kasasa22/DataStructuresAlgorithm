function SelectionSort(arr){
    for(let i = 0; i<arr.length;i++){
        let mini = i;

        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[mini]){
                mini = j;

            }
        }

        if(i!==mini){
            let temp = arr[i];
            arr[i] = arr[mini]
            arr[mini] = temp
        }
    }
    return arr;

}

const arr= [3,5,6,4,1,2];
console.log(SelectionSort(arr))