let temperature = parseInt(prompt("Current temperature?"));
if (temperature > 100) {
    alert("Please Decrease temperature");
} else if (temperature < 20) {
    alert("Please Increase temperature");
} else {
    alert("Everything is OK");
}