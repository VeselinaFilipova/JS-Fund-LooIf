function solve(args) {
    var str = args[0],
        num = +args,
        num2 = num%100 - num%10;
        num3 = num%1000 - num%100;
        value = '',
        firstDecade = '',
        secDecade = '',
        hundreds = '';
        
        if (num === 0) {
            console.log('Zero');
        }

         switch(num%100) {
             case 10: firstDecade = "Ten"; break;
             case 12: firstDecade = "Twelve"; break;
             case 11: firstDecade = "Eleven"; break;
             case 13: firstDecade = "Thirteen"; break;
             case 14: firstDecade = "Fourteen"; break;
             case 15: firstDecade = "Fifteen"; break;
             case 16: firstDecade = "Sixteen"; break;
             case 17: firstDecade = "Seventeen"; break;
             case 18: firstDecade = "Eighteen"; break;
             case 19: firstDecade = "Nineteen"; break;
         }
          //return firstDecade;
     
     
         switch(num2) {
             case 20: secDecade = "Twenty"; break;
             case 30: secDecade = "Thirty"; break;
             case 40: secDecade = "Fourty"; break;
             case 50: secDecade = "Fifty"; break;
             case 60: secDecade = "Sixty"; break;
             case 70: secDecade = "Seventy"; break;
             case 80: secDecade = "Eighty"; break;
             case 90: secDecade = "Ninety"; break;
         }
         //return secDecade;
     

         switch(num%10) {
             case 2: value = "Two"; break;
             case 1: value = "One"; break;
             case 3: value = "Three"; break;
             case 4: value = "Four"; break;
             case 5: value = "Five"; break;
             case 6: value = "Six"; break;
             case 7: value = "Seven"; break;
             case 8: value = "Eight"; break;
             case 9: value = "Nine"; break;
         }
      //   return value;
      switch(num3) {
             case 200: hundreds = "Two hundred"; break;
             case 100: hundreds = "One hundred"; break;
             case 300: hundreds = "Three hundred"; break;
             case 400: hundreds = "Four hundred"; break;
             case 500: hundreds = "Five hundred"; break;
             case 600: hundreds = "Six hundred"; break;
             case 700: hundreds = "Seven hundred"; break;
             case 800: hundreds = "Eight hundred"; break;
             case 900: hundreds = "Nine hundred"; break;
         }
         
         if (num >= 20 && num < 100) {
             console.log(secDecade + " " + value.toLowerCase());
         }
         if (num < 20 && num >= 10) {
             console.log(firstDecade);
         }
         if (num > 0 && num < 10) {
             console.log(value);
         }

         if (num >= 100 && num <= 999) { //if there are real hundreds
             
         if (num%100 === 0 && num%10 === 0) { 
             console.log(hundreds);
         } else if (num%100 >= 20 && num2!==0) {
            console.log(hundreds + " and " + secDecade.toLowerCase() + " " + value.toLowerCase());
         } else if (num%100 < 20 && num%100 > 10){
             console.log(hundreds + " and " + firstDecade.toLowerCase());
         }
         if (num2 === 0 && num%100 !== 0 && value !== 0) {
             console.log(hundreds + " and " + value.toLowerCase());
         }
         }
}