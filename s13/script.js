console.log("Connected");

//Javascript Operators
//Symbols used to manipulate values / operands
//Used to perform specific mathematical and logical computation in operands.


/* 
    Operator Type
    1. Assignment Opertars
     - Represents the equal sysbol (=)

*/

let a = 14;
a = 18;

let b = a;
console.log(b);

//in this sample, using let can reassign the values of a variables.

/* 
    2. Arithmeic Operators
        - mathematical operations on a numerical operations on a numerical 
        values / operands and returns a single numerial value.
*/


console.log(20+30); 
//Primitive Data Type

console.log("20" + "30");
//String
//String Concatenation or just the plain concatenation
// It links or combines 2 strings together.

//Subtraction / Difference (-)
console.log(20-10);
//This was declared as a number

console.log("20" - "10");
//Type Coercion - automatic / imlicit conversion of values from one data type to another.


let val1 = 50;
let val2 = '30';
let diff = val1-val2;

console.log(diff);

console.log("Twenty" - "ten") 
//NaN = "Not a Number"


//Division ( / )

console.log(50/5);

console.log("fifty"/"five");

/*
    Modulus Division (%)
        - The output is the remainder 
*/
console.log(100%3);
//1 - remainder

//Increment (++) and Decrement(--)
let c = 30;
console.log(++c); // 31 - add 1
console.log(c); //31 - The existing value has been added previously so that is why the new value displayed as 31.

console.log(--c);//30
console.log(c);//30

/* 
    
*/


console.log(--c); //30
console.log(c); //30


/* 
    If the operand comes first before the operator, it displays the value of the operand before performing arithmetic operation.
*/

console.log(c++); //30
console.log(c); //31 - current value of c

console.log(c--) //31
console.log(c);//30



/* Exercises */


//1.
console.log(150+20);

//2.
let num1 = 30;
let num2 = 45;
let answer = num1 / num2;

console.log(answer);

//3.
console.log(4 + (num1 * num2));



//COMPOUND ASSIGNMENT OPERATOR - SHORTCUT FOR ARITHMETIC AND ASSIGNMENT OPERATION.
// PERFORMS MATHERMATAICAL OPERATION THEN ASSIGNING THE RESULT BACK TO THE VARIABLE.

/* 
    lONG METHOD:
    let j = 15;
    console.log(j+3); - 18
    console.log(j); - 15
*/

//ADDTION ASSIGNMENT OPERATOR (+=)
let i = 15;
console.log(i += 3); // - 18 = adds the number in the inial value
console.log(i);

//SUBTRACTION ASSIGNMENT OPERATORS (-=)
console.log(i -= 10); // 18


//MULTIPLICATION ASSIGNMENT OPERATOR(*=)
console.log(i *= 15); //120 - format 8*15;

//DIVISION ASSIGNMENT OPERATOR (/=)
console.log(i /= 2); //60 - format 120 / 2 to get the answer of the devision

//MODULUS ASSIGNMENT OPERATOR (%);
console.log(i %= 8); //4 - remainder.




//COMPANION / COMPOUND OPERATORS - COMPARES TWO OPERANDS AND RETURNS A LOGICAL VALUE (TRUE OR FALSE)

/*
    < = lESS THAN
    > = GREATER THAN
*/


//EQUALITY OPERATOR ( == ) OR  KNOWNS A " LOOSE EQUALITY"
//COMPARES THE SAME VALUE REGARDLESS OF DATA TYPE BECAUSE OF COERCION.

console.log("Jan" == "Jan"); // TRUE IS THE OUTPUT;

console.log(true == true); //OUTPUT - TRUE ( SAME VALUE )
console.log(false == true); // OUTPUT - FALSE
console.log(true == false); // OUTPUT - FALSE
console.log(false == false); // OUTPUT - TRUE( SAME VALUE )
console.log(null == undefined) // OUTPUT - TRUE ( SAME VALUE )
console.log("20" == 20); //OUTPUT - TRUE ( BECAUSE OF COERSION )

/* 
    Binary Numbers
    1 = true
    0 = false

*/
console.log(true == 1); // OUTPUT - TRUE
console.log(true == 2); //OUTPUT - FALSE
console.log(false == 0); //OUTPUT - TRUE
console.log(false == 1); //OUTPUT - FALSE
console.log(4.00 == 4); //OUTPUT - TRUE

//COERSION - IMPLICIT