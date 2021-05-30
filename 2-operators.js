//Arithmetic
console.log(2 + 15 * 2 - 1);

//Assignment
var x = 5;
x+=5;
console.log(x);

//Comparison
var one  = 1;
var one_again = 1;
var one_string = '1';
console.log(one  == one_again); //true
console.log(one  === one_again); //true
console.log(one == one_string); //true //same value even types are different
console.log(one === one_string); //false //types are different

//Logical
console.log((5<2) && (2>=3));
console.log((5<2) || (2>=3));
console.log(!(5==3));
var number1 = 100;
var number2 = 10;


if(number1 > number2){
  console.log('number1 is greater than number2');
}else if(number1 < number2){
  console.log('number2 is greater than number1');
}else{
  console.log('number1 is equal to number2');
}
