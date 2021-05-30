// For loop
for(var counter = 1; counter < 5; counter++){
  console.log('Inside the loop : ' + counter);
}

console.log('Outside the loop : ' + counter);


// Nested loop
for(var i = 0; i < 8; i++){
  for(var p = 0; p < 4; p++){
    console.log("Inner loop count : " + p);
    if(p == 1){
      console.log("\n");
    }
  }
}


// While loop
var count = 1;
while (count < 5) {
  console.log(count);
  count += 2;
}

  console.log();

// Break
for(var i = 0; i < 10; i++){
  if (i % 3 == 0) {
      break;
  }
}

console.log(count);

// Continue
var start = 2;
var sum = 0;

do{
  if(start % 2 == 0){
    continue;
  }
  sum += start;
}while (++start <= 10);
console.log(sum);
