
const myRoll = document.getElementById("myRoll");
const result = document.getElementById("result");
const imageresult = document.getElementById("image-result");
const values = [];
const images = [];


myRoll.onclick = function () {
    const diceNumber = document.getElementById("diceNumber").value;
    for (let i = 0; i < diceNumber; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src=css/${value}.png>`);

    }
    result.textContent = `Dice:${values.join(", ")}`;
    imageresult.innerHTML = images.join("");
}




