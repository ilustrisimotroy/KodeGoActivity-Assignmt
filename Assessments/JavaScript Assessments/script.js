console.log("Hello KodeGo");


//CRUD

/*
    1. Ensure that your script is connected to your HTML Document.
    2. Create a function that can input student's name and inform that the name is added on the list.
    3. Once student names are addedd, create a function to display the total number of students added on the list. 
*/

    // let students = [];
    // let inputStudent = prompt("Enter Students: ");
    // console.log(inputStudent);

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


    let students = [];
    let size = 3;
    function inputNewStudent() {

        for(let i = 0; i < size; i++) {
            
            students[i] = prompt("Enter Students: ");
            if(students[i]) {
                console.log(`${students[i]} is added to the student's`);
            }
        }
    }
    
    inputNewStudent();
    console.log(students);

    // function inputStudents() {
    //     let inputStudent = 
    //     let newStudents = students.push(inputStudent);  
    //         if(newStudents) {
    //             console.log(`${inputStudent} is added to the student's`);
    //         }  
    //     // console.log(students[0]);
    //     // console.log(students);
    // }

    // inputStudents();
