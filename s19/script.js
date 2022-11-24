// console.log("Connected");

// /*

//     ES6 Updates (2015)
//     Exponent Operator
//     Before ES6, Math.pow() is being used to exponent operator.

// */
//     //Math.pow() is being used to exponent operator.
//     const firstNum = Math.pow(8, 2); 
//     console.log(firstNum);

//     //In ES6 Version, you can use number ** number;
//     const secondNum = 8 ** 2;
//     console.log(secondNum);


//     /*
//         Template Literals - Allow to write strings without using the concatenation operator(+)
//             -greatly helps with code readability
//             -pre-template literal string
//             -using single quotes('') or doube quotes("")
//     */

//         //Concatenation Operator
//         let name = 'John';
//         let message = "Hello " + name + "! Welcome";
//         console.log(message);

//         //Using bacticks
//         message = `Hello ${name}! Welcome`;
//         console.log(message);

//     /*
//         Strings using template literals
//             uses backticks(` `) and ${}
//     */

//         const anotherMessage = // Template literals can use multi lines also.
//             `
//                 ${name} attended a month competition.
//                 He wond it by solving the problem 8 ** 2
//                 with the solution of ${firstNum}.

//             `

//             console.log(anotherMessage);

//     /*
//         Template Literals allow us to write string with embedded JS expressions.
//         Expressions - These are any valid unit of code that resolved to a value.
//         ${} - used to include JS Expressions in "Strings" using template literals.
//     */

//             const interestRate = 5;
//             const principal = 1000;

//                 console.log(`The interest on your saving's account is ${principal * interestRate}`);

//     /*
//         Array Destructuring
//             -Allows to "unpack" elements in an arrays into distinct variables.
//             -Allows to name array elements with variables instead of using numbers.
//             -Helps with code readability.

//         syntax:
//             let / const [vaiableName, variableName] = array (name of array);
//     */

//             const fullname = ["Juan", "Dela", "Cruz"];
//             const pet = ["geeko", "tarantula", "centipede"];

//                 //Example of Pre-array Destructuring

//                     //Call the declared variable "fullname"
//                 console.log(fullname[0]);
//                 console.log(fullname[1]);
//                 console.log(fullname[2]);

//                     //Call the declared variable "pet"
//                 console.log(pet[0]);
//                 console.log(pet[1]);
//                 console.log(pet[2]);

//                     //Convert the message using values coming from array elements.
//                 console.log(`Hello firstname, middlename, lastname! it's nice to meet you`);
                    
//                     //The Solutin
//                 console.log(`Hello ${fullname[0]}, ${[fullname[1]]}, ${fullname[2]}! it's nice to meet you`);

//                     //Using Array Destruturing using ES6
//             const[firstName, middleName, lastName] = fullname // Reverse for an array / too call the existing variable from the top.
//             const[pet1, pet2, pet3] = pet; // Reverse for an array / to call the existing variable from the top.

//                     //Converted each elements into distrinct variable
//                 console.log(firstName);
//                 console.log(middleName);
//                 console.log(lastName);

//                 console.log(`Hello ${firstName}, ${middleName}, ${lastName}!`);


//             //Using array destructing in a function
//             function introduce() {
//                 console.log(`Hi! My name is ${firstName} ${middleName} ${lastName}`);
//                 console.log(`I have 3 pets ${pet1}, ${pet2}, ${pet3}`);
//             }

//             introduce(); //Invoke the function

//             //Using array destructing in a functioin using paramets and arguments
//             function intro(fn, mn, ln) {
//                 console.log(`Hi! My name is ${fn} ${mn} ${ln}`);
//                 console.log(`I have 3 pets ${pet1}, ${pet2}, ${pet3}`);
//             }

//             intro(firstName, middleName, lastName); // Invoke the function


//             /*
//                 Object Destructuring
//                     -allows use to unpack propertis of object into distinct variables
//                     -we cannot declare other variable name instead we use existing properties of the object.

//                 syntax: 

//                     let / const {propertyName, propertyName} = object;
//             */

//                 const person = {
//                     fname: "Jane",
//                     mname: "Dela",
//                     lname: "cruz"
//                 }

//             // Pre-Object Destructuring
//                 console.log(person.fname);
//                 console.log(person.mname);
//                 console.log(person.lname);


//             //Object Destructuring
//             const {fname, mname, lname} = person;
                
//                 console.log(fname, mname, lname);

//             function getFullName(personObject) {
//                 console.log(personObject);
//                 console.log(`My name is ${personObject.fname}, ${personObject.mname}, ${personObject.lname}`);
//             }

//             getFullName(person);


//         /*
//             Arrow Function
//                 -compact alternative syntax to tradition functions.
//                 -useful code snippets where creating functions will not be reused in any other portion of the code.
//                 -They are adhering to the principles of "DRY (Do not Repeat Yourself)" method.

//             syntax: 

//                 let / const variableName = () => {
//                     function codeblock
//                 }
//         */

//             //Arrow functions with multiline codeblock
//                 const hello = () => {
//                     console.log(`Hello World`);
//                 }
//             //Arrow functions in oneline without the return keyword and curly braces
//                 const Hello = () => console.log(`Hello Phil`);

//             //Traditional Functions
//                 function sayHello () {
//                     console.log(`Hello`);
//                 }

//             //call functions.

//             hello();
//             Hello();
//             sayHello();

//  /*
//     Exercide 1
//         - Desctructure Array Elements

//                 Destructure the array elements into disctinctive variables.
//                 Use an arrow function to introduce themselves.
//                 Display it in the console.
//                 Give name: let students = ["Jhon", "Jane", "Judy"];
//  */

//         let students = ["Jhon", "Jane", "Judy"];
//         let [student1, student2, student3] = students;

//                 const myName = () => {
//                     console.log(student1);
//                     console.log(student2);
//                     console.log(student3);
//                 }

//                 myName();

//                     students.forEach((students) => console.log(students));
//                     students. forEach(students => console.log(students));



//     /* 
//         Implicit Return Statement
//                 -These are instances when you can omitt the "return" statement
//                 -This works becuase even without the return statement JS implicity adds it for the result of functiont.
//     */

//                 //Tradition functions
//                     function product(a, b) {
//                         return 5 * 9;
//                     }

//                     console.log(product(5,2));

//                 //Functions Expression = Anonymous Function being stored in a variable
//                 //Can alse use "let"

//                     const product_2 = function () {
//                         return 3 * 3;
//                     }
//                     console.log(product_2());


//                 //Arrow functions with an implicit return statement
//                     //oneliner function without return and curly braces
//                         const product_3 = () => 2 * 2
//                         console.log(product_3);

//                 //Arrow functions with explicit return statement
//                     //Multi-liner function code block with curly braces and return keyword

//                         const product_4 = () => {
//                             return 2 * 9;
//                         }

//                         console.log(product_4());

//                 //Default Function Argument Value
//                         //Provides a defauult argument value if none is proves when the function is invoked.
//                         const theName = (name = `user`) => {
//                             return `Hi, ${name}`;
//                         }

//                         console.log(theName()); //It was set as a defualt
//                         console.log(theName(`Johsan`));

//     /*
//         Function - These represent actions that object can take also know as "method"

            
//             Class Baes Object Blueprints
                
//                 syntax: 
//                         class className {
//                             constructor (objectPropertyA, objectPropertyB)
//                                 - it is repsonsible for the allocatin (distributing) memory for the objects using classes as blueprints.
//                                 {
//                                   this.objectPropertyA = objectPropertyA;
//                                   this.objectPropertyB = objectPropertyB;   
//                                 }
//                         }
//     */

//     //Step 1: Create a template / Blueprint
//         class Car {
//             constructor(brand, name, year) {
//                 this.brand = brand;
//                 this.name = name;
//                 this.year = year;
//             }
//         }

//     //Step 2: Instatiate an object using "new" keyword
//         const myCar = new Car();
//         console.log(myCar); //Undefined (Wala pay sulod)

//     //Step 3: Using assigment operator to assign values to properties after instantiation of object.
//         myCar.brand = "BMW";
//         myCar.name = "GS1250";
//         myCar.year = 2022;
//         console.log(myCar); // Values are already declared inside the class object (Nasulod na ang mga objects)

//     //Step 4: Instantiating a new object from the car class with initialize values.
//         const myNewCar = new Car("Toyota", "Vios", "2021");
//         console.log(myNewCar); // New Values are displayed. (Bag.o ang values nga gi input)


/* 
    Assignment: Class Based Object Blueprints
        
        Sample Output
            : Jelly's weight in lbs is 132

        Instructions
            -Calcute the weight based on the user input in kilograms(kg).
            -Create a function that displays the converted weight in pounds.
            -Execute the function property based on the initialized object with arguments.

    
    Answer 1:

    class Weight {
    constructor(yourName, yourKilo) {
        this.name = yourName;
        this.kilogram = yourKilo;
        }
    }

    const getKg = new Weight();
    getKg.name = "Jelly";
    getKg.kilogram = 60;
    // console.log(getKg);

        function theWeight() {
            let theName = getKg.name;
            let theKg = parseFloat(getKg.kilogram / 0.453592).toFixed(0);
            return `${theName}'s weight in lbs in ${theKg}`;
        }

        console.log(theWeight());

    Answer 2:

        class Weight {
            constructor (name, kg) {
                this.name = name;
                this.kilograms = kg;
                this.pounds = kg * 2.2;
                this.convertedWeight = function() {
                    console.log(`${this.name}'s weight in lbs is ${this.pounds}`);
                }
            }
        }

        let poundsWeight = new Weight("Jelly", 60);
*/

class Weight {
    constructor (name, kg) {
        this.name = name;
        this.kilograms = kg;
        this.pounds = kg * 2.2;
        this.convertedWeight = function() {
            console.log(`${this.name}'s weight in lbs is ${this.pounds}`);
        }
    }
}

let poundsWeight = new Weight("Jelly", 60);
poundsWeight.convertedWeight();


