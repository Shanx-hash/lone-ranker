const Happy = document.getElementById("Happy");
const Sad = document.getElementById("Sad");
const Tired = document.getElementById("Tired");
const Angry = document.getElementById("Angry");
const Button = document.getElementById("Button");
const Result = document.getElementById("Result");

Button.onclick = function () {
    if (Happy.checked) {
        Result.textContent = "You are feeling 😊-Go and Party Champ"
    }
    else if (Sad.checked) {
        Result.textContent = "You are feeling 😢-Go and talk to some friends"
    }
    else if (Tired.checked) {
        Result.textContent = "You are feeling 😴-Go and Sleep"
    }

    else if (Angry.checked) {
        Result.textContent = "You are feeling 😡-Go and cool down";
    }
    else {
        Result.textContent = "Select Your mood Today😊";
    }
}
