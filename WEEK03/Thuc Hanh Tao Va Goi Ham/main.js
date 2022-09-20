function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Excellent. We'll play a nice game of chess";

    } else {
        result = "Mayber later then";

    }
}

let confirmAnswer = confirm("Shall we play a game");
let theAnswer = processConfirm(confirmAnswer);
console.log(theAnswer);







