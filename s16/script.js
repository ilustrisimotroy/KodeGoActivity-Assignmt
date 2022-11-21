console.log("Hello Nested");

/*
    NESTED IFs
        - AN IF STATEMENT THAT IS THE TRAGET OF ANOTHER IF OR ELSE.


EXAMPLE:
*/

// let userInput = prompt("Enter age");

// function eligibility (age) {
//     if (age < 18 ) {
        
//         return ("Minor");

//     } else {

//         //Nested If's Example
//         if (age >= 18 && age <= 60 ) {
//             return("Eligible");
//         } else {
//             return ("Senior Citizen");
//         }
//     }
// }

// console.log(eligibility(userInput));




//Exercises

    let inputNumber = prompt("Enter a number: ");
        
        // if (isNaN(inputNumber)) {
        //     alert("not number");
        // } else {
        //     alert("number");
        // }

        function EvenOdd(inputedNumber) {
            if (isNaN(inputNumber)) {
                alert("Unexpected Input");
            } else if (inputNumber == "") {
                alert("Please input inseide the box");
            } else {
                
                if(inputNumber % 2 === 0 ) {
                    alert(`The ${inputNumber} is even`);
                } else {
                    alert(`The ${inputNumber} is add`);
                }
            }
        }
        console.log(EvenOdd(inputNumber))

/* 

    NESTED LOOPS - A LOOP THAT IS PLACED TO ANOTHER LOOP.

    SYNTAX:

        for ( init; condition; increment/decrement ) {
            statement of an inner loop
        }

        statemenet of an outer loop
        
*/


// for (let i = 0; i <= 2; i++) {

//     console.log(" - Outer Loop ");
//     for (let j = 0; j <= 3; j++) {
//         console.log("--- Inner Loop ");
//     }

// }