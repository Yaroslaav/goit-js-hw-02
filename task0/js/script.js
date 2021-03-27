'use strich'
console.log("----------------------------------------------");
const findLongestWord = function (string) {
   let AllWords = string.split(' ');
   let WordsLength = [];
   console.log(AllWords);
   for(let w = 0; w < AllWords.length; w++){
      WordsLength.push(AllWords[w].length) ;
      console.log(WordsLength);

      // if(WordsLength>last){
      // }else{
      //    console.log("no");
      // }
      
   }
   let max = Math.max(...WordsLength); 
   let indexOf = WordsLength.indexOf(max);
   let indexWord = AllWords[indexOf];
   console.log(indexWord);
   
 };
 
 /*
  * Виклич функції для перевірки працездатності твоєї реалізації.
  */
findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'
 
findLongestWord('Google do a roll'); // 'Google'
 
findLongestWord('May the force be with you'); // 'force'