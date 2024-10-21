function countDown(number){
//base case
if(number===0){
    console.log("stop execution")
    return
}
console.log(number);
countDown(number-1)

}

countDown(6);
