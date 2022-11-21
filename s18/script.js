console.log("Connected");

/* 
    Object = CAR

    Properties - car.name = Fiat
               - car.model = 500
               - car.weight = 850kg
               - car.color = white

    Methods - car.start()
            - car.drive()
            - car.brake()
            - car.stop()


    Objects VS. Primitive Data Types

*/

let person = {
    firstGrading: 95, //Number
    subject: "English", //String
    teachers: ["Jelly", "Jem", "Joey"], //Array
    isStudent: true, // Boolean
    school: {
        city: "Manila",
        country: "Philippines"
    }, // Object
    classmates: [
        {
            name: "Dahl",
            barch: "26"
        },

        {
            name: "John Paul",
            batch: "5"
        },

        {
            name: "Jhyx",
            batch: "1"
        }
    ], // Array

    description: function() {
        return `${this.subject} : ${this.firstGrading}`
    } // Functions
}

/* 
    Q: How to access properties in an object?
        - Through dot(.) notation
        - Through bracket ([" "]) notation
        - objectName.propertyName
*/

console.log(person.firstGrading); //objectName.propertyName
console.log(person.subject); //Output: English
console.log(person[`isStudent`]); //Output: true (boolean)
console.log(person[`teachers`]); //Output: list name of teachers (array)
console.log(person.teachers);//Output: list name of teachers(even using dot notation it wil still retun the desired output(array))
console.log(person.teachers[1]); //Output: index "Jem"
console.log(person.school); // Output: Lits inside the Objects
console.log(person.school.city); // Output: Manila - To access the inside the object
console.log(person.school[`city`]); // Output: Manila - To access the inside the object
console.log(person[`school`][`city`]); //Output: Manila 

//Q: How to access school's country?
console.log(person.school.country);
console.log(person[`school`][`country`]);


//Q: How to access the 2nd object of classmates?
console.log(person[`classmates`][1].batch);

//Q: How to access the function in the object
console.log(person.description());


//Q: How to add property in an object?
console.log(person.semester);
person.semester = "first";
console.log(person);

// Removing a property in an object
delete person.semester
console.log(person)



//Assignment: Compute t he student average by accessing the declared objects

//Clue: we can use to compute the average manually or using for loop
const studentGrades = [
    {
        studentId : 1,
        Q1 : 89.3,
        Q2 : 91.2,
        Q3 : 93.3,
        Q4 : 89.8
    },

    {
        studentId : 2,
        Q1 : 79.3,
        Q2 : 81.2,
        Q3 : 93.3,
        Q4 : 79.8
    },

    {
        studentId : 3,
        Q1 : 90.3,
        Q2 : 82.2,
        Q3 : 93.3,
        Q4 : 95.8
    },

    {
        studentId : 4,
        Q1 : 95.3,
        Q2 : 79.2,
        Q3 : 88.3,
        Q4 : 96.8
    },

    {
        studentId : 5,
        Q1 : 85.3,
        Q2 : 75.2,
        Q3 : 82.3,
        Q4 : 92.8
    }
];


// Answer Assignment
for(let i = 0; i < studentGrades.length; i++) {
    //Compute element average
    let forLoopAve = studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4 / 4;

    console.log(forLoopAve);

    //Add average property in each object
    studentGrades[i].forLoopAve = parseFloat(forLoopAve.toFixed(1));

}

console.log(studentGrades);



let hero = {
    name: "Angela",
    level: 1,
    role: "Support",
    health: 100,
    attack: 50,
    mana: 100,

        tackle: function () {
            console.log(`This ${hero} tackled ${hero}`);
            console.log(`Target hero's health is now reduced to hero Health`);
        },

        faint: function() {
            console.log(`Hero fainted`);
        }
}

console.log(hero); // call the variable


/* 

    Object Constructor - Serves as a blueprint of our objects.
        -Objects created using "this" constructor will inherit what are the function properties and methods set by this function.

            Steps in creating and object constructor.

                step1 = Create a template or a blueprint.
                step2 = Initialize an Object with arguments
                step3 = Execute the property (Execute the tacle property of Pekachu Object)

*/



//Step 1 = Creating a Template / Blueprint.
function pokemon(name, lvl, hp) {
    this.name = name;
    this.level = lvl;
    this.health = hp * 2;
    this.attack = lvl;

        this.tackle = function(target) {
            console.log(target);
            console.log(`This ${this.name} tackled ${target.name}`);
            console.log(`${target.name}'s health is now reduced to ${target.health - this.attack}`);
        },

        this.faint = function() {
            console.log(`${this.name} fainted!`);
        }
}

//Step 2 = Initializing the object with arguments
let pikachu = new pokemon("Pikachu", 5, 50);
let charizzard = new pokemon("Charizzard", 8, 40);

    console.log(pikachu);
    console.log(charizzard);


//Step 3 = Executing the property
console.log(pikachu.tackle(charizzard));


    //Example for creating a object constructor
        function Person(fname, lname, age) {
            this.fname = fname;
            this.lname = lname;
            this.age = age;
            this.details = `${fname}, ${lname}`;
        }

        let person = new Person("Jhon", "Doe", 34); //Initialing the object with arguments

        console.log(person.details); // call the object with arguments
        
        

/* 

        Array of Objects

*/

        let cars = [
        {
            brand: "Toyota",
            model: "Vios",
            prices: 700
        }, 
        {
            brand: "Mazda",
            model: "NSX 5",
            price: 600
        },
        {
            brand: "Nissa",
            model: "Furtuner",
            price: 500
        }
    ];


        /* 
            find(callback function()); - iterates over tems in out array and returns the item / element which will satisfy the condition.

                find() will return the "first" item that will satify the condtion and it stops its process.
                    if find() cannot satisfy its condition even after iterating all the items / elements in the array it will return undefined
                        -we can use logical operators for our condtions.
                        -is a case senstive in nature.
        */  

    let foundCars = cars.find(
        function(car) {
            console.log(car); // Displays the objects inside the card array / objects
            
            return(car.brand === "Toyota");
        }
    );

    console.log(foundCars);

        if(foundCars === undefined) {
            console.log(`Not Exist`);
        } else {
            console.log(`Exists`);
        }


//Example Exercise

        let users = [

            {
                username: "kimdhyn",
                email: "dahyun@gmail.com",
                password: "dahyunTwiceu"
            }, 
            {
                username: "jenKimBP",
                email: "jennieSolo@gmail.com",
                password: "dududuJenniw"
            },
            {
                username: "lisaBP",
                email: "lisaManoban@gmail.com",
                password: "lisaIsHere"
            }
        
        ];


        /* 
            Create a new function called login.
            This function shuold be able to receive an email and a password.
            This function should be able to find the user with the corret email and password.
            Save the returned user into a variable.
            Show the found user object in the console.
        
                Stretch Goal: 
                    If we can't find a user with the same email or password: Show an alert: Login faild. Wrong Credentials.
                    If we did find a user with the same email or password: Show an alert : Thank you for loggin in.
        */
        //Anser for the Exercise 

            function login(userEmail, userPassword) {
                let userCredentials = user.find((users) => {
                    return users.email === userEmail && users.password === userPassword
                });

                if(!userCredentials) {
                    alert("Login Failed. Wrong Credentials.");
                } else {
                    alert("Thank you for loggin in.");
                    console.log(userCredentials);
                }
            }

            login("dahyun@gmail.com", "dahyunTwiceu"); // Invoked the funtion.