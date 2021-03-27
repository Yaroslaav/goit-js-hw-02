'use strich'

const calculateEngravingPrice = function (message, pricePerWord) {
   let words = message.split(' ');
   console.log(words);
   let HowManyWords = words.length;
   console.log(HowManyWords);
   let TotalPrice = pricePerWord * HowManyWords;
   console.log(TotalPrice);
 };
 
 /*
  * Виклич функції для перевірки працездатності твоєї реалізації.
  */

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10); // 80
 

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',20); // 160
 

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40); // 240
 

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20); // 120