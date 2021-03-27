'use strich'

const checkForSpam = function (message) {
   let LowerCase = message.toLowerCase();
   let ChekWords = LowerCase.split(" ");
   console.log(ChekWords);
   console.log(LowerCase);
   let tabuWord1 = ChekWords.includes("[spam]");
   let tabuWord2 = ChekWords.includes("sale");
   console.log('[spam] - ' +tabuWord1, ', ' + 'sale - ' + tabuWord2);
 };
 

checkForSpam('Latest technology news'); // false
 
checkForSpam('JavaScript weekly newsletter'); // false
 
checkForSpam('Get best sale offers now!'); // true
 
checkForSpam('[SPAM] How to earn fast money?'); // true