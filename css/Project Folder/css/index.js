//Random Face Generator
const FaceResult = document.getElementById("Face-Result");
const mySubmit = document.getElementById("mySubmit");


mySubmit.onclick = function () {
    let value = Math.floor(Math.random() * 15) + 1;
    let image = `<img src="css/face${value}.png">`;
    FaceResult.innerHTML = image;
}
