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

//COERSION - IMPLICIT / AUTOMATIC CONVERSION OF VALUES FROM ONE DATA TYPE TO ANOTHER


//PARSEINT() - CONVERTED INTO WHOLE NUMBERS
//PARSEFLOAT() - USED FOR DECIMAL NUMBERS

let ex = 75.68;
console.log(parseInt("75.68"));
console.log(parseFloat("75.68"));
console.log(parseInt("75.68").toFixed(2)); //.toFixed(2) - diplay the decimal places
console.log(parseFloat(ex.toFixed(2)));


//STRICT EQUALITY OPERATORY ( === ) = DOESN'T PRACTICE COERCION
    // - COMPARES "SAMENESS OF VALUE"
console.log(1 === 1);
console.log(5 === "5");
console.log(true === 1);
console.log(null === undefined);
        // Null / null = INTENTIONAL ABSENSE OF ANY OBJECT VALUE
        // Undefined = Doesn't assigned

console.log("James" === "Daniel"); // - SAMENESS OF VALUE IS PRACTICED IN STRICT EQUALITY OPERATOR
console.log(true === true);
console.log(false === false);

//INEQUALITY OPERATOR ( != (KNOWS AS LOOSE INEQUALITY OPERATOR)) = COMPARES DIFFERENCE OF VALUES REGARDLESS OF DATA TYPES
    // = COERSION WILL TAKE PLACE

console.log(false != true);
console.log(false != false);
console.log(3 != 3.00);
console.log(null != undefined);
console.log(true != 1); 

//STRICT INEQUALITY OPERATOR ( !== ) = DATA TYPES AND DIFFERENCE ANY VALUES
    // = IT DOESN'T TAKE COERSION

console.log(false !== true); //true
console.log(4 !== 4.00);
console.log(null !== undefined);
console.log(true !== 1); 

//GREATER THAN ( > (MALAKI BA) )
console.log(100 > 75);
console.log(70 > 180);

//LESS THAN ( < (MALIIT BA) )
console.log(45 < 50);
console.log(67 < 45);

//GREATER THAN OR EQUAL TO ( >= )
console.log(45 >= 45); //true
console.log(44 >= 45); //false

//LESS THAN OR EQUAL TO ( <= )
console.log(100 <= 100);
console.log(1 <= 0.5);

/* LOGICAL OPERATOR */
    
//AND ( && ) OPERATOR - WHEN THERE IS FALSE IN THE STATEMENT IT SET AS FALSE
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("Max == Max" && (undefined == null));


let kei = true;
console.log(kei > 2 && kei < 2); //FALSE

let isOnline = true;
let isBoss = false;
let chatSiBoss = isOnline && isBoss;
console.log(chatSiBoss);
//BEST PRACTICE TO DECLARE A BOOLEAN USE THE WORD "is" BEFORE THE GIVEN WORD


//OR OPERATOR ( || ) = IT EVALUATES TO TRUE OF EITHER OF THE OPERAND IS TRUE.
    // - IF BOTH OPERAND IS FALSE THE RESULT IS FALSE.

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//NOT OPERATOR - KABALIKTARAN
console.log(!true);
console.log(!false);

let isAdmin = true;
let isInstructor = "1";
let isAnswer = !isAdmin === isInstructor;
console.log(isAnswer);


let faveNum = 333;
let chooseNum = 245;
let isHigher = !(chooseNum > faveNum || faveNum >= chooseNum);
console.log(isHigher);


let isTrue = true;
let isFalse = false;

let isTralse = !(!isFalse != !isFalse && isFalse !== isTrue || (!isTrue != !isFalse && isFalse != !isTrue)); //OUTPUT - True