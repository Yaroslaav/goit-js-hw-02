'use strich'
console.log("----------------------------------------------");
const findLongestWord = function (string) {
   let AllWords = string.split(' ');
   let WordsLength;
   let mark = '';
   let last = 0;
   console.log(AllWords);
   for(let w = 0; w < AllWords.length; w++){
      WordsLength = AllWords[w].length;
      // console.log(AllWords[w]);
      if(WordsLength>last){
         mark = AllWords[w];
         last = WordsLength;
      }else{
         console.log("no");
      }
      
   }
   console.log(mark);
   
 };
 
 /*
  * Виклич функції для перевірки працездатності твоєї реалізації.
  */
findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'
 
findLongestWord('Google do a roll'); // 'Google'
 
findLongestWord('May the force be with you'); // 'force'