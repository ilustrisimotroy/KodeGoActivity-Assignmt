


/* FILTER - IT FILTERS OUT THE ELEMENTS BASED ON THE CONDTIONS
          - RETURNS AN ARRAY THAT CONTAINS ELEMENTS WHICH PASSES A GIVEN CONDTION. */

let digits = [1,2,3,4,5];
let newFilter = digits.filter(
    function (element) {
        return element < 3;
    }
);

// console.log(newFilter);

/* INCLUDE - WHEN CHECKING ARRAY ELEMENTS IT IS A CASE SENSTIVE
           - RETURNING TRUE OR FLASE AS APPROPRIATE, IT RETURNS TRUE IF A STRING CONTAINS A `SPECIFIED` STRING, OTHERWISE IT WILL RETURN FALSE.
           - IT DETERMINES WEATHER AN ARRAY INCLUDES A CERTAIN VALUE AMONG ITS ENTRIES. */

// let pets = ["Shih Tzu", "Hedgegog", "Squirrel", "Rats"];
// // let newIncludes = pets.includes("squirrel");
// let input = prompt("Enter pets0");

// console.log(newIncludes); // True - Boolean


// function checkTheWord(pets, input) {
//     if(input == pets.includes) {
//         return true;
//     } else {
//         return `${word} not found`;
//     }
// }

// checkTheWord(pets, input);


// let pets = ["dogs", "cats", "birds", "fishes"];
// let EnterPets = prompt("Enter pets");
// let newPets = pets.filter(
//     function (element) {
//         if(EnterPets == pets) {
//             console.log("exists in array");
//         } else {
//             console.log("test");
//         }
//     }
// );

// console.log(newPets);


/*
    EVERY() - CHECKS IF "ALL ELEMENTS" PASSES A GIVEN CONDITION.



EXAMPLES:
*/

    let newEvery = digits.every(
        function (element) {
            return element > 2
        }
    );

    console.log(newEvery); // OUTPUT "FALSE" - RETURNS A BOOLEAN


/*
        SOME() - CHECKS IF "AT LEASE ONE ELEMENT" PASSES A GIVEN CONDITION.
               - RETURNS "TRUE" EVEN IF ONLY SOME OF THE ELEMENTS PASSED THE GIVEN CONDTION.


EXAMPLE:
*/

let newSome = digits.some(
    function (elemets) {
        //"element (e)" parameters represents the index in the array.
        return elemets > 2
    }
);

console.log(newSome); // OUTPUT "TRUE" - BOOLEAN

/*

    reduce() - evaluates elements from left to right and returns a "single value"


EXAMPLE:
*/

// let newReduce = digits.reduce(
//     function(a,b) {
//         let total = a + b;
//         return total;
//     }
// );

// console.log(newReduce); // Output 15 - it add all the elements in an array.

// console.log(newReduce / digits.length); //Output 3 - it divides the total number of an array and the elements.

let numeric = [5,11,30,118,634];

/*
Get the average of the elements in the array and display the average to your browsers concole uesing reduce.
*/
let reduceMethod = numeric.reduce(
    function(a,b) {
        let totalNumber = a + b;
        return totalNumber;
    }
);
console.log(reduceMethod);
console.log(reduceMethod / numeric.length);


//Stretch Goal - get the average of the elements in the array and display the average to your browsers console using for loop.

let total = 0;
for (let m = 0; m < numeric.length; m++) {
    total = total + numeric[m];
}

console.log(total);
console.log(total / numeric.length);

