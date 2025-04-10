const Input = document.getElementById("Input");
const Fehrenheit = document.getElementById("Fehrenheit");
const Celcius = document.getElementById("Celcius");
const Submit = document.getElementById("Submit");
const result = document.getElementById("result");
let temp;

Submit.onclick = function () {

    if (Fehrenheit.checked) {
        temp = Input.value;
        temp = Number(temp);
        temp = Math.floor(temp * 9 / 5) + 32;
        result.textContent = temp + "°F";
    }
    else if (Celcius.checked) {
        temp = Input.value;
        temp = Number(temp);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
        if (temp < 0) {
            result.textContent = temp.toFixed(1) + "°C" + "🥶";
        }
        else if (temp >= 30) {
            result.textContent = temp.toFixed(1) + "°C" + "🥵";
        }
    }
    else {
        result.textContent = "Please select a number!" + "😶‍🌫️";
        result.style.color = "red";
    }

}
