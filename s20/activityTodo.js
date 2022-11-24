console.log("connected");

let button = document.querySelector("#button");
let todoWrapper = document.querySelector(".todo-wrapper");
let deleteBtn = document.querySelector("#deleteBtn");

button.addEventListener("click", () => {
    let userInput = document.querySelector("#userInput").value;
    
    if(userInput.length > 5) {
        let li = document.createElement("li");
        let checkbox = document.createElement('input');


        li.className = "todo";
        checkbox.className = 'checked';
        checkbox.type = 'checkbox';
        checkbox.id = 'delete-checkbox';

        let node = document.createTextNode(userInput);

        li.appendChild(checkbox);
        li.appendChild(node);
        todoWrapper.appendChild(li);
        document.querySelector("#userInput").value = "";
    } else {
        alert("You must enter more than 5 characters");
    }
});

//DELETE LIST 

// let deleteItem = () => {
   
//     }
    // if(checkBox.checked == true) {    
    
    // //     // alert("test");
    // //     if(e.target.className === "todo") {
    // //         let msg = confirm (`Are you sure that you want to delete`);
    
    // //         if(msg == true) {
    // //             document.querySelector(".todo-wrapper").removeChild();
    // //         }
    // //     }
    // }
// }

deleteBtn.addEventListener("click", () => {
    let checkBox = document.querySelectorAll('input[type="checkbox"]');
    let div = document.getElementById("delete-checkbox");
    for(let item of checkBox) {
        if (item.checked == true) {
            let msg = confirm (`Are you sure that you want to delete \n ${item.parentElement.innerText}`);
            if(msg == true) {   
                item.parentElement.remove(div);
            }
            // 
        }
    }
})
// deleteBtn.addEventListener("click", (e) => {
//     let checkBox = document.getElementById("delete-checkbox");
//     if(checkBox.checked == true) {    
//         if(e.target.className = "todo") {
//             e.target.parentNode.remove();
//         }
//     }


// });
