/*
1. DIFFERENCE BETWEEN A COMPARISON AND ASSIGNMENT OPERATOR.

    A. COMPARISON OPERATOR
        - RETURN THE BOOLEANS WHICH IS `TRUE` OR `FALSE` AND DO NOT
            CHANGE ANY VALUES.

    
    B. ASSIGNMENT OPERATOR
        - TO SET A VARIABLE EQUAL TO VALUE AND CHANGE 
            THE VALUE OF THE VARIABLE ON TH LEFT OF THE OPERATOR.

2. WHAT IS BOOLEAN AND WHAT IS REPRESENT.

    A. ITS A LOGICAL DATA TYPE THAT CAN HAVE REPRESENT THE VALUES `TRUE` OR `FALSE`.


3. HOW IS THE += OPERATOR DIFFERENT THAT + OPERATOR?

    A. ADDITION ( + ) -  ADDS NUMBERS AND IT CAN BE USED TO ADD STRINGS OR CONCATENATE.
    B. ASSIGNMENT ( += ) - IT CAN BE USE TO ADD STRINGS AND IT ALSO ASSIGNS A NEW VALUE 
                            TO THE VARIABLE ON THE LEFT BASED ON THE VALUE TO THE RIGHT.
*/

// CODE PART    

    // 1. ASSIGNMENT OPERATOR 
        // ( += )
    let num1 = 20;
    let num2 = 50;
        num1 += 15;
        console.log(num1);

        // ( -= )
        num1 -= 12;
        console.log(num1);

        // ( *= )
        num1 *= 12;
        console.log(num1);
        
        // ( /= )
        num1 /= 12;
        console.log(num1);

    // 2. COMPARISON OPERATORS
            console.log(num1 <= num2);
            console.log(num1 >= num2);
            console.log(num1 !== num2);


