'use strich'

let input = +prompt('Введіть число: ');
console.log(input);
let number = 0;
const numbers = [];
let total = 0; 

for (let i = 0; input!=null && input!=0; i++){
   numbers[i] = input;
   console.log(numbers);
   if(numbers!=0 && numbers!=null){
      for(number of numbers){
         total+=number
      }
      console.log('Загальна сума чисел дорівнює: ' + total);
      total = 0;
   input = +prompt('Введіть число: ');
   
   }
}


