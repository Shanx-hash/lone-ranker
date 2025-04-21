//Emoji Generator
const Secreteword = "Banana";
let attempts = 0;
let guess;
const Hint = "🍌It is something which you can peel";
running = true;


while (running) {
    guess = window.prompt(`Enter a Secreteword to access this website`);



    if (guess === null) {
        window.alert("Game Cancelled!");
        break;
    }
    if (!isNaN(guess)) {
        window.alert("Please enter a valid input");
        continue;
    }

    if (guess === Secreteword) {
        window.alert(`Congratulations🥳🥳.The secreteword was ${Secreteword}`);
        running = false;
    }
    else {
        attempts++;
        if (attempts > 3) {
            window.alert(`Wrong answer.Hint:${Hint}`);
        }
    }



}
//Emoji Generator;


const myButton = document.getElementById("myButton");
const emojiresult = document.getElementById("emoji-result");
let values = [];
let images = [];

myButton.onclick = function () {
    const emojiNumber = document.getElementById("emojiNumber").value;
    for (let i = 0; i < emojiNumber; i++) {
        let value = Math.floor(Math.random() * 8) + 1;
        values.push(value);
        images.push(`<img src=css/emoji${value}.png>`);

        emojiresult.innerHTML = images.join("");
    }


}
