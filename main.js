function getAccess() {

    var username = document.getElementById("userID").value;
    var password = document.getElementById("userSecurity").value;

    let result;

    // Check inputs
    if (username === "" || password === "") {
        result = "empty";
    }
    else if (username === "Maria" && password === "10282011") {
        result = "success";
    }
    else {
        result = "wrong";
    }

    // Determine visual output
    switch(result){

        case "success":
            window.location.href = "notebook.html";
            break;
        case "empty":
            window.alert("Please fill in all requirements.");
            break;
        case "wrong":
            window.alert("Wrong Username/Password.");
            break;
    }
}