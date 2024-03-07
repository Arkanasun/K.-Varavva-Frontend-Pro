 let string=""
 for( let i=20; i<=30; i+=0.5){
     string += i===20 ? `${i}` : ` ${i}`
}
 console.log(string);


 let d = 27;
 for (let k = 10; k<=100; k+=10 ){
     console.log(d*k);
 }


 let N = prompt('Please enter a whole number');
 for(let l=1; l<=100; l++){
    if (l**2 < N)
 {
        console.log(l);
   }
}



 function primeNumb(num) {
     if (num > 1) {
         for (let i = 2; i < num; i++) {
             if (num % i == 0) {
                 return "Составное число";
             }
         }
         return "Простое число";
     } else {
         return "Число должно быть больше 1";
     }
 }
console.log(primeNumb(200));



const userNumber = prompt(`Please enter a whole number`)
let isPossible = false;
for(let i =1; i < userNumber; i++) {
    if (3**i == userNumber) isPossible = true;
}console.log(isPossible);


