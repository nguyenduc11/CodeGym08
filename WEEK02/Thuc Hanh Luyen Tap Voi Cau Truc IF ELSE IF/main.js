let userName = prompt("Who are you" , "");
if (userName == "Admin") {
    let password = prompt("Please fill your password");
        if (password == "TheMaster") {
            alert("Welcome");
        } else if (password == "") {
            alert("Canceled");
        } else {
            alert("Wrong password");
        }
} else if (userName == "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}