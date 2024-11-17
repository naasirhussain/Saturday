//! Logic Building Questions - If-Else and Nested If-Else



//1. Write a program to check if a number is positive, negative, or zero.

let num1 = 0;
if(num1 < 0){
  console.log("number is negative")
} else if (num1 == 0){
  console.log("number is zero");
} else{
  console.log("number is positive");
}


// 3. Determine if a person is eligible to vote based on their age.

  let age1 = 20;
  if(age1 >= 18){
    console.log("you can vode");
  }
  else{
    console.log("try next time");
  }

// 4. Find the largest of two numbers.

num1 = 6;
num2 = 1;
if(num1 < num2)
{
  console.log("number is larger");
}
else{
  console.log("number is smaller");
}

// 5. Find the largest of three numbers.

num1 = 1;
num2 = 3;
num3 = 2;
if(num1 > num2 && num1 > num3){
  console.log("num1 is largest number");
} else if(num2 > num1 && num2 > num3){
  console.log("num2 is largest number");
}else{
  console.log("num3 is bigger number");
}

// 6. Check if a given character is a vowel or a consonant.

let str = "y"
if(str === 'a' || str === "e" || str === "i" || str === "o" || str === "u"){
  console.log("character is vowel");
}else {
  console.log("character is not a vowel");
}

//  7. Determine if a number is even or odd.

let num2 = 1;
if(num2 %2 == 0){
  console.log("it is even");
}else{
  console.log("It is odd");
}

// 8 . Check if a number is divisible by 5 and 11

let num5 = 55;

if(num5 %5 == 0 && num5 %11 == 0){
  console.log("number is divisible by 5 and 11");
} else{
  console.log("number is not divisible by 5 or 11");
}


// 9. Verify if a triangle is valid based on its angles

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

let totalAngle = num1;



// 10. Categorize grades based on a percentage: A (90+), B (80-89), C (70-79), F (<70).

let marks = 82;
if(marks >= 90){
  console.log("Grade A");
} else if (marks >= 80){
  console.log("Grade B");
}else if (marks >= 79){
  console.log("Grade C");
}else {
  console.log("fail");
}

// 11. Identify whether a person is a child, teenager, or adult based on age.

let age = 8;
if(age <=16){
  console.log("child");
} else if(age <= 25){
  console.log("teenager");
}else{
  console.log("adult");
}


//12. Check if a given number is a multiple of 3 or 7.

let num = 21;
if( num % 3 === 0  && num%7 === 0){
  console.log("number is multiple of 3 and 7");
}else{
  console.log("number is not multiple of 3 or 7");
}

// 13.Determine the type of a character (uppercase, lowercase, digit, or special symbol).










// 14. Check if a given year is a century year.

let year= 2000;

  if (year % 100 === 0) {
      console.log("this is current year");
  } else {
      console.log("This is not a century year");
  }

// 15. Calculate the electricity bill based on usage (slab rates provided).




// 16. Find the smallest of three numbers.

let num3 = 6;
let num4 = 1;
let num6 = 4;

if (num3 <= num4 && num3 <= num6) {
    console.log("num3is the smallest");
} else if (num4 <= num3 && num4 <= num6) {
    console.log("num4vis the smallest");
} else {
    console.log("num6 is the smallest");
}


// 17. Determine whether a number lies in a specific range (e.g., 10-50).

let number = 20;

if(number > 20 && number < 50){
    console.log("The number is within the range.");
} else { 
    console.log("The number is not in the range.");
}