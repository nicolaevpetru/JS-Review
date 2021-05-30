var num1 = 100;
var num2 = 8;

if(num1 > num2){
  console.log('Number 1 is greater than number 2');
}else if (num1 < num2) {
  console.log('Number 2 is greater than number 1');
}else {
  console.log('Number 1 is greater than number 2');
}


//Ternary statement
var age = 25;
var allowRegister = age > 18 ? true : false;
console.log(allowRegister);

//Switch statement
var year = 2021;
var month = 2;
var dayCount;

switch (month) {
  case 1:case 3: case 5: case 7: case 8: case 10: case 12:
    dayCount = 31;
    break;
  case 4 : case 6: case 9: case 11:
    dayCount = 30;
    break;
  default:
    dayCount = -1 //INVALID MONTH
}
