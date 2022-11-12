// console.log('success');

/* 
    IF STATEMENT - CONDITIONAL BRANCHING STATEMENT
                 - CONSDITION IS TRUE, A GROUP OF STATEMENT IS EXECUTED.
                 - CONDITION IS FALSE, THE STATEMENT IS SKIPPED.

    SYNTAX: 
        if (condition) {
            statement 1;
            statement 2;
        }

EXAMPLE:

    if (20 <= 30) {
        console.log("You are not allowed to enter");
    }


    let age = prompt("Enter your age");

    function getAge (age) {
        if (age <= 30) {
            console.log("You are not allowed to enter");
        }

        return (age);
    }

    getAge(age);
*/



/* 
    IF - ELSE STATEMENT
                


    SYNTAX:
        if (condition) {
            statement 1;
            statement 2;
        } else if (condition) {
            statement 3;
        } else {
            statement 4
        }

EXAMPLE:

    let myAge = 30;

    if (myAge === "30") {
        alert("Hello from the code block");
    } else {
        alert("else ouput");
    }

Exercise 1:

    let cm = prompt("Input centimeter");


function getCentimeter (cm) {
    if (cm < 150) {
        alert("Did not pass the minimum height requirement");
    } else {
        alert("Pass the minimum height requirement");
    }

    return (cm);
}

getCentimeter(cm);
*/


/* 
    ELSE IF - 2 OR MORE POSSIBLE OUTCOMES

EXAMPLE:
    let price = prompt(`Price:`);

    if(price < 50) {
        console.log(`affordable`);
    } else if (price <= 75) {
        console.log(`pricey`);
    } else if (price <= 90) {
        console.log(`Benta ko muna isang atay ko`);
    } else {
        console.log(`Out of the budget, puritang tunay`);
    }


EXERCISES:

let weather = prompt(`Intensity`);

function windSpeed (weather) {

    if(weather < 30) {
        console.log(`not a typhoon`);
    } else if (weather < 61) {
        console.log(`Tropical Depression is detected`);
    } else if ((weather >= 61) && (weather <= 88)) {
        console.log(`Tropical Storm is detected`);
    } else if ((weather >= 89) && (weather <= 117)) {
        console.log(`Severe tropical is detected`);
    } else {
        console.log(`Typhoon Detected`);
    }

    return (weather)
}
windSpeed(weather);


*/


/* 
    SWITCH STATEMENT - IT PERFORMS DIFFRENT ACTION / CASES ON DIFFERENT CONDITIONS.
                     - COMPARES THE SAME EXPRESSION TO SEVERAL DIFFERENT VALUES.
        
    
        RULL OF THUMB
            - YOU CAN USE THIS STATEMENT WHEN YOU ARE COMPARING A LIST OF VALUES AGAINST A SING VARIABLE.

    SYNTAX:
        
        switch ( expression ){
            case condition 1:
                statements
                break; - BREAKS OUT THE SWITCH BLOCK 
                       - STOPS THE EXCUTION INSIDE THE SWITCH BLOCK.
            case condition 2:
                statements
                break;
            default: - IT SPICIFIES THE CODE TO RUN IF THERE IS NO MATCH.
                statement
        }

EXAMPLE:

let day = prompt("Enter a number between 1 to 7");

switch (day) {
    case (day = "1"):
        console.log("Monday");
        break;
        
    case (day = "2"):
        console.log("Tuesday");
    break;

    case (day = "3"):
        console.log("Wednesday");
    break;

    case (day = "4"):
        console.log("Thursday");
    break;
    case (day = "5"):
        console.log("Friday");
    break;

    case (day = "6"):
        console.log("Saturday");
    break;

    case (day = "7"):
        console.log("Sunday");
    break;

    default:
        console.log("Error: no number input");
        
}

let color = prompt("Input Color: ");

function inputColor(color) {
    switch (color) {
        case (color = "Black"):
        console.log("The color is " + color);
        break;
    case (color = "BLACK"):
        console.log("The color is " + color);
        break;       
    case (color = "Pink"):
        console.log("The color is " + color);
        break;
    case (color = "PINK"):
        console.log("The color is " + color);
            break;
    case (color = "Violet"):
        console.log("The color is " + color);
        break;
    case (color = "VIOLET"):
        console.log("The color is " + color);
            break;

    default:
        console.log("Error: no color inputed");
    }
    return(color);
}
inputColor(color);

*/

let name = "Jelly Lumactud";
console.log(name.length);
//COUNTS THE NUMBER OF CHARACTERS THAT INCLUDES THE SPACES.

//ARRAYS AND OBJECTS
let number = [1,54,58,60,75,90,99];
console.log(numbers.length);

/* 
    TERNARY OPERATOR
    ? - if
    : - else

        SYNTAX: 
            CONDITION? <STATEMENT>
            :STATEMENT

EXAMPLE:

    let legalAge = 21;
    (legalAge >= 18 && legalAge <= 59)?console.log("legal pero hindi senior")
    :console.log("minor pa po siya");



*/







