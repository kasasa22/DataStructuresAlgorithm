const twoSum = (arr, target)=>{
    for (i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===target){
                console.log(arr[i],arr[j])
                return[i,j]
                

            }
           
        }
    } 
    return []
}

answer = twoSum([1,3,5,6], 8)
console.log(answer)

