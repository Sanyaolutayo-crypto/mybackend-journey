//multiplication table using nested for loops
for(let i = 1; i <= 5; i++)
{     //outer loop
for (let j = 1 ; j <= 10; j++)
{ //inner loop
    console.log(i + " x " + j + " = " + (i * j));
}
console.log("-----------"); 
}

//multiplicaton table using while loop
let i =1;
while (i <= 5) {
    let j = 1 ;
    while (j <= 10){
        console.log(i + " x " + j + " = " + ( i * j));
        j++;
    }
    console.log("--------"); 
 i++;
}

//example
let number = 7;
let i = 1;

while (i <= 10) {
    console.log(number + " x "+ i + " = " + (number * i));i++;
}