
//      question no 1 
  //  CHECK TWO GIVEN NUMBER AND RETURN TRUE IF ONE OF THE NUMBER IS 50 OR IF THIER SUM IS 50 .
  function number(num) {
    let q = 25;
  let t = 25;
  
  let sum = q + t;
  if (q == 50 || t == 50) {
        return("one of the numbers is 50 " + true);
 } else if (sum == 50) {
        return("their sum is 50  " + true);
} else {
        return(false);
}
  }
  console.log(number(55,59));


  // question no 02
// CHECK FROM THE GIVEN INTEGER, WHETHER IT IS POSITIVE OR NEGITIVE .

function given(integer) {
    let a = -0 / 6;

if (a > 0) {
  return("positive number");
} else if (a == 0) {
  return("0 is Neutral number");
} else {
  return("negative number");
}
}
console.log(given(10));



//  question no 03 
// CHECK WHEATHER A GIVEN NUMBER IS EVEN OR ODD.

function odd(even) {
    let number = 40;
if  (number  % 2 ===0 ){
  return("even");
}
else if(number %2 != 0) {
  return("odd");
}
else{
  return("odd");
}
}
console.log(odd(12));

// question no 04 
// CHECK WHEATHER A GIVEN NUMBER IS POSITIVE NUMBER IS A MULTIPLE OF 3.

function weather(positive) {
    let given = 60;
    if (given % 3 === 0 && given < 0 ){
        return("yes");
    }
    else if (given % 3 !== 0 && given >0 ){
        return("negitive");
    }
    else {
    return("no");
    }
}
console.log(weather(50));

//  question 5 
//  DETERMINE  WHETHER  A GIVEN YEAR IS A LEAP YEAR .
 function determine(leap) {
    let year = 2002;
if(year %  4!== 0 ){
  return ("true");
}
else if (year % 400 ===0 ){
  return("true");
}
else
 return("flase");
 }
 console.log(determine(4));


//  question no 6
//  CHECK FROM THE TWO NUMBERS,WHETHER THE FIRST NUMBER IS "GREATGER", "LESSER "OR "EQUAL" TO THE SECOND NUMBER.

function Check(greather) {
    let no1 = 15;
let  no2= 16;
let no3 = 15;
if(no1>no2){
  return("greather");
}
else if(no1>no2){
   return("lesser");
}
else(no1>no2 ===no3);{
 return("eqaul");
}
}
console.log(Check(67));

// question no 7 
// CHECK FROM THE THREE SIDES OF THE TRAINGLE . USE CONDITIONS TO DETERMINE AND DISPLAY WEATHER THE TRAINGLE IS  "EQUILATERAL" (ALL SIDES ARE EQAUL), "ISOSCELES" (TWO SIDES ARE EQAL), OR "SCCALENE" (NO  SIDESS ARE EQAUL).
function from(sides) {
    x = 350;
y = 35;
z = 35;
if (x == y) {
  return("Isosceles x and y are equal ");
 } else if (x == z) {
   return("Isosceles x and z are equal ");
 } else if (y == z) {
   return("Isosceles y and z are equal ");
 }
 x = 35;
y = 35;
z = 35;
 if (x == y) {
 return("EQUILATERAL x and y are equal ");
 } else if (x == z) {
   return("EQUILATERAL x and z are equal ");
 } else if (y == z) {
   return("EQUILATERAL y and z are equal ");
 }
 x = 35;
y = 354;
z = 350;
 if (x == y) {
   return("SCCALENE x and y are equal ");
 } else if (x == z) {
   return("SCCALENE x and z are equal ");
 } else if (y == z) {
   return("no size");
 }
 
}
console.log(from(35));
//  Check from the given month (1-12) if it's "Winter" (December-February), "Spring" (March-May), "Summer" (June-August), or "Autumn" or "Fall" (September-November).
function getSeason(month) {
    // Ensure month is a number between 1 and 12
    if (month < 1 || month > 12) {
        return "Invalid month";
    }
 
    // Determine the season based on the month
    if (month === 12 || month === 1 || month === 2) {
        return "Winter";
    } else if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    }
 }
 console.log(getSeason(1));  // Winter
 console.log(getSeason(4));  // Spring
 console.log(getSeason(7));  // Summer
 console.log(getSeason(10)); // Autumn