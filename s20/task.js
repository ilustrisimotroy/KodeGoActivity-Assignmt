console.log("connected");

//Get Access to the button
let button = document.querySelector("#button");

//querySelector method - returns the first element that matches a CSS seletor.


//Get Access to the ul tag(parent tag of li tag)
let todoWrapper = document.querySelector(".todo-wrapper");

//onSubmit add new task to the DOM (Document Object Model)

    /*
        //addEventListener() - it is a method attached an event handler to the document.

        syntax:
            "click" = is called an event
                event - is required to be declared inside the event listener.
                      - elimnate the use of the word "on"
                    example:
                        - instead of declaring the event name as onclick, we wil just input the word "click"

                REMINDER: ALL HTML DOM event are listed in the function.
                    () - function to run when an event occurs
    */
button.addEventListener("click", () => {
    //Get user input
    let userInput = document.querySelector("#userInput").value;
    
    //inputting tasks that is greater than 5 charaters
    if(userInput.length > 5) {
        //create an "li" tag
        let li = document.createElement("li");
        var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'car';
            checkbox.name = 'interest';
            checkbox.value = 'car';
        //createElement - is a method that creates an element node. (list items).
        //add a className of "todo" in "li" tag
        li.className = "todo";
        //className - the name of the class declared in the HTML document.
        //create a text node from the "userInput" 
        let node = document.createTextNode(userInput);
        //createTextNode - it is a method that creates a text node with the specified text.
        li.appendChild(node);
        // append the node to the list item (li).

        todoWrapper.appendChild(li);
        //append the list items into unordered list(ul)

        //Clear the text input / empty userInput (input box)
        document.querySelector("#userInput").value = "";
    } else {
        alert("You must enter more than 5 characters");
    }
});

//DELETE LIST 
document.querySelector(".todo-wrapper").addEventListener("click", (e) => {
    if(e.target.className === "todo") {
        let msg = confirm (`Are you sure that you want to delete \n ${e.target.innerText}`);

        if(msg == true) {
            document.querySelector(".todo-wrapper").removeChild(e.target);
        }
    }
});
