function yourName() {
    let user = prompt ("what is your name?");
    return document.write(user);
}


function timeOfDay() {
    let time = prompt("what hour is it? (0 -23");
    let location = prompt("what country are you in?");
    let message = "";
}

if (time <= 11 || location === "england") {
    message = "good morning" ;
} else if (time <= 18 ||location ==="england") {
    message = "good after";
} else if (time <=24 ||location ==="england") {
    message = "good night";
} else {
    message = "what!";
}

return document.write(message);