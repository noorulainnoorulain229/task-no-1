//      question no 1 
  //  CHECK TWO GIVEN NUMBER AND RETURN TRUE IF ONE OF THE NUMBER IS 50 OR IF THIER SUM IS 50 .

  let q = 25;
  let t = 25;
  
  let sum = q + t;
  // (q == 50 ) || (t == 50)
  
  if (q == 50 || t == 50) {
    console.log("one of the numbers is 50 " + true);
  } else if (sum == 50) {
    console.log("their sum is 50  " + true);
  } else {
    console.log(false);
  }




// question no 02
// CHECK FROM THE GIVEN INTEGER, WHETHER IT IS POSITIVE OR NEGITIVE .
let a = -0 / 6;

if (a > 0) {
  console.log("positive number");
} else if (a == 0) {
  console.log("0 is Neutral number");
} else {
  console.log("negative number");
}



//  question no 03 
// CHECK WHEATHER A GIVEN NUMBER IS EVEN OR ODD.
let number = 40;
if  (number  % 2 ===0 ){
  console.log("even");
}
else if(number %2 != 0) {
  console.log("odd");
}
else{
  console.log("odd");
}
// question no 04 
// CHECK WHEATHER A GIVEN NUMBER IS POSITIVE NUMBER IS A MULTIPLE OF 3.
 let given = 60;
 if (given % 3 === 0 && given < 0 ){
  console.log("yes");
 }
 else if (given % 3 !== 0 && given >0 ){
  console.log("negitive");
 }
 else {
  console.log("no");
 }





//  question 5 
//  DETERMINE  WHETHER  A GIVEN YEAR IS A LEAP YEAR .

let year = 2002;
if(year %  4!== 0 ){
  console.log ("true");
}
else if (year % 400 ===0 ){
  console.log("true");
}
else console.log("flase");

//  question no 6
//  CHECK FROM THE TWO NUMBERS,WHETHER THE FIRST NUMBER IS "GREATGER", "LESSER "OR "EQUAL" TO THE SECOND NUMBER.

let no1 = 15;
let  no2= 16;
let no3 = 15;
if(no1>no2){
  console.log("greather");
}
else if(no1>no2){
    console.log("lesser");
}
else(no1>no2 ===no3);{
  console.log("eqaul");
}

// question no 7 
// CHECK FROM THE THREE SIDES OF THE TRAINGLE . USE CONDITIONS TO DETERMINE AND DISPLAY WEATHER THE TRAINGLE IS  "EQUILATERAL" (ALL SIDES ARE EQAUL), "ISOSCELES" (TWO SIDES ARE EQAL), OR "SCCALENE" (NO  SIDESS ARE EQAUL).


let x, y, z;

x = 350;
y = 35;
z = 35;
if (x == y) {
   console.log("Isosceles x and y are equal ");
 } else if (x == z) {
   console.log("Isosceles x and z are equal ");
 } else if (y == z) {
   console.log("Isosceles y and z are equal ");
 }
 x = 35;
y = 35;
z = 35;
 if (x == y) {
   console.log("EQUILATERAL x and y are equal ");
 } else if (x == z) {
   console.log("EQUILATERAL x and z are equal ");
 } else if (y == z) {
   console.log("EQUILATERAL y and z are equal ");
 }
 x = 35;
y = 354;
z = 350;
 if (x == y) {
   console.log("SCCALENE x and y are equal ");
 } else if (x == z) {
   console.log("SCCALENE x and z are equal ");
 } else if (y == z) {
   console.log("no size");
 }


//  Check from the given month (1-12) if it's "Winter" (December-February), "Spring" (March-May), "Summer" (June-August), or "Autumn" or "Fall" (September-November).

   let month=5;
   // Ensure month is a number between 1 and 12
   if (month < 1 || month > 12) {
       console.log("Invalid month");
   }

   // Determine the season based on the month
   if (month === 12 || month === 1 || month === 2) {
       console.log ("Winter");
   } else if (month >= 3 && month <= 5) {
       console.log( "Spring");
   } else if (month >= 6 && month <= 8) {
       console.log ("Summer");
   } else if (month >= 9 && month <= 11) {
       console.log ("Autumn");
   }

