// // *Variables*
// // Create a variable and console log the value
// var dogs = 2;
// console.log(dogs);

// // Create a variable, add 10 to it, and alert the value
// var doggies = 3;
// alert (doggies + 10);

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
// function subtractFour(n1,n2,n3,n4){
//   alert (n1-n2-n3-n4);
// }
// subtractFour(10,2,4,1)
// // Create a function that divides one number by another and returns the remainder
// function devidesOne(n1,n2){
//   return(n2%n1);
// }alert (devidesOne(5,2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Jum(n1,n2){ (n1 + n2 > 50) ? alert("Jumanji"): null
}
Jum(20,50);


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function devideThree(n1,n2,n3){ (n1*n2*n3 % 3) ? alert("Zebra"): alert("not")
}
devideThree(20,50,30);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordsTimes(word,num){
  for(let i=1;i<=num;i++)
  console.log(word);
}wordsTimes("hello",5);