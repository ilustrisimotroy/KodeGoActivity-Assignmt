console.log("Connected");

let login_attempts = 3;
//Sets the number of login attempts

function validateForm() {
    //document.getElementById - returns an element object represeting the element whose id property matches the specified string from html file.
    //elementID - they are required to be unique if specified to get access to a specific element quickly.
    // .value - sets or returns the value of an attribute.
    let emailAdd = document.getElementById("emailAdd").value;
    let pass = document.getElementById("password").value;

    if(emailAdd == "student@mail.com" && pass == "discovery") {
        alert("Login successfully");
        document.getElementById("emailAdd").value = "";
        document.getElementById("password").value = "";
    } else {
        if(login_attempts == 0) {
            alert("No login attempts available");
        } else {
            login_attempts = login_attempts - 1;
            alert("Login failed. You have only " + login_attempts + " login attempts available");

            if(login_attempts == 0) {
                document.getElementById("emailAdd").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("form1").disabled = true;
            }
        }
    }

    //During form submission, if a particular entry is unfilled, return false is used to prevent the submission.
    return false;
}

