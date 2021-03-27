'use strich'

const formatString = function (string) {
   let stringSymbols = string.split('');
   console.log(stringSymbols);
   let StringLength = stringSymbols.length;
   console.log(StringLength);
   if(StringLength<=40){
      console.log(string); 
   }else{
      let finishStringLeters = stringSymbols.slice(0,41)
      finishStringLeters.push("...");
      let FinishString = finishStringLeters.join('');
      console.log(FinishString);
   }
 };
 
 /*
  * Виклич функції для перевірки працездатності твоєї реалізації.
  */
formatString('Curabitur ligula sapien, tincidunt non.');
 // повернеться оригінальний рядок
 
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
 // повернеться форматований рядок
 
formatString('Curabitur ligula sapien.');
 // повернеться оригінальний рядок
 

   formatString(
     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
   );
 // повернеться форматований рядок