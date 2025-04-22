//MineCraft Emoji Generator;
const mySubmit = document.getElementById("mySubmit");
const EmojiResult = document.getElementById("Emoji-Result");
const values = [];
const images = [];

mySubmit.onclick = function () {
    for (let i = 0; i < 2; i++) {
        let value = Math.floor(Math.random() * 10) + 1;

        const image = `<img src=css/mine${value}.png>`;

        EmojiResult.innerHTML = image;
    }


}
