/* 
    Javascript
        - creats dynamically updating content, control multimedia, animate images, and pretty much everthing else.

    Dynamic Code
        - Server Side = ability to update the dislay of a web page/app, to show different things generating new content as required.

        - Client Side = generates new content inside the client's browser.
*/

console.log("Hello World!");


// //1. innerHTML = ();
// document.getElementById("sample").innerHTML = ("Welcome to Javascript");
// // The most common way to display data in HTML.

// //2. document.write(); - testing purposes
// document.write("Hello method");

// //3. alert() - displays a window in the web browser.
// alert("I am an alert!");

// //4. console.log() - For debugging purposes
// console.log("This is a console log");

// - single line comment

/* 

multi-line comment

*/

/* Variables 
    - A variable is a container for storing data(storing data values).

        3 types of Variable:
        var - most common variable. It can be reassigned but only accessed within a function.
        const - 

*/

//Naming variables
const pi = 3.1416; 
// Const variable cannnot be reassigned.
console.log(pi);

let name = "Jem";
// Let variable is re-assignable
console.log(name);
name="Dahl";
console.log(name);
// cannot re-declare the variable itself 


/* Data Types
    = Loosely typed and dynamic language
    = Variable
*/

//Primitives Data Types
let name1 = "Bryan";
console.log(name1);
console.log(typeof name1) //typeof - enables us to know what data type is it.

let age = 15; //number
console.log(typeof age);

let grade = 90.5;
console.log(typeof grade);

let isPresent = true;
//Boolean = answers true or false 
console.log(isPresent);
console.log(typeof isPresent);

let myCopy;
console.log(myCopy);
//undefined is the output there is no value assigned into it.

let option1 = null;
console.log(option1);

// we do not apply number first before a word

// We can use a special character before word when a variable.
// There are some chraracters that do not work for assigning a variable. like(!@#%^);
let $option2 = null;
console.log($option2);

let $_year = 2023;
console.log($_year);
//2 speicial characters are working before a word.

let state = `Washington`;
//Backticks are working but for String only.

//Object
let person = {
    //Property: Value
    // Key value pair

    name: "Jose Rizal", 
    age: 30,
    address: "Calamba, Laguna",
    isDoctor: true,
    spouse: null,
    siblings: [
        "Paciano",
        "Saturnina",
        "Lucia",
        "Tinidad",
        "Narcisa",
        "Soledad",
        "Olympia",
        "Concepcion",
        "Maria",
        "Josefa"
    ]
};

console.log(person);
console.log(person.name - person.spouse);
console.log(person.siblings[5]);


let fruits = [
    "mango",
    "apple",
    "watermelon",
    "kiwi",
    "rambutan"
];

console.log(fruits);
console.log(fruits.length); // Displays the array's length


//Function
    //Function Declaration
    //Function keyword
    //Function name and parenthesis (holds the parameters)
    //Curly braces - detemine its block of codes, statements are written inside this code block.

function greeting(firstName, lastName) 
    //greeting - user defined function name
    //(variables inside the parenthesis) - user defined parameters
    //parameters are also know as arguments, properties or attributes.
    //parameters are name varible passed into a function.
    //imports arguments in the function.
{
    console.log(`My name is ${firstName}, ${lastName}, it was nice to meet you`);
}

greeting("Gerard", "Way")// Invoke function calls
greeting("Chester", "Bennington");

//Using a return statement
function product (a, b) {
    console.log("Product");
    return(a*b); // Stops the execution of a function and returns a value.
}

console.log(product(2,4));


function average(a, b ) {
    console.log("Average");
    return(a + b);
}

console.log(average(10, 5) / 3);

function convertion(a) {
    console.log("Covertions");
    return(a / 1000);
}

console.log(convertion(20));