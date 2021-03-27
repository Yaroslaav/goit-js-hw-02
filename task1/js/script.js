'use strich'

const logItems = function (array) {
   for(let i = 0; i<array.length; i++){
      let length = array.length;
      let index = i+=1;
      i = i - 1;
      console.log(index + ' - ' + array[i]);
      length = 0;
      index = 0;
   }
 };
 
 /*
  * Виклич функції для перевірки працездатності твоєї реалізації.
  */
 logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
 
 logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);