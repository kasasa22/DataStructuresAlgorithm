function WordCounter(text){
    const lowerText = text.toLowerCase();

    const wordmap = {};

    const words = lowerText.split(/\s+/);

   for(const word of words){
      if(word in wordmap){
          wordmap[word] ++;

   } else{
    wordmap[word] = 1;
   }
}

return wordmap; 
}

 const text = "hello world hello world hello world";
 const result =WordCounter(text);
console.log(result);
