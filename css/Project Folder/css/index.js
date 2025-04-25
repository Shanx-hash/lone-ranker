//Random Password Generator;
//Topics Covered;
//Functions;
//For Loop;
//If Statements
//Generating a Random Password;
const PasswordResult = document.getElementById("PasswordResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
    let password = generatepassword(12, true, true, true, true);
    PasswordResult.textContent = `Password is ${password}`;
    PasswordResult.style.color = "green";
}

function generatepassword(lenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let LowerChars = "abcdefghigklmnopqrstuvwxyz";
    let UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let NumberChars = "0123456789";
    let SymbolChars = "#@$%^&*?_-\/";

    let AllowedChars = "";
    let password = "";

    AllowedChars += includeLowercase ? LowerChars : "";
    AllowedChars += includeUppercase ? UpperChars : "";
    AllowedChars += includeNumbers ? NumberChars : "";
    AllowedChars += includeSymbols ? SymbolChars : "";

    for (let i = 0; i < lenght; i++) {
        randomindex = Math.floor(Math.random() * AllowedChars.length);
        password += AllowedChars[randomindex];
    }
    return password;

}



const passwordlength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;






