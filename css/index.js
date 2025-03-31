//Payment Form Using HTML,CSS and JavaScript;Checked Property
const Subscribe = document.getElementById("Subscribe");
const Submit = document.getElementById("mySubmit");
const Visa = document.getElementById("Visa");
const MasterCard = document.getElementById("MasterCard");
const PayPal = document.getElementById("PayPal");
const subtext = document.getElementById("subtext");
const maintext = document.getElementById("maintext");

Submit.onclick = function () {
    if (Subscribe.checked) {
        subtext.textContent = `You are Subscribed`;
    }
    else {
        subtext.textContent = `You are not Subscribed`;
    }
    if (Visa.checked) {
        maintext.textContent = `You are paying with Visa!`;
    }
    else if (MasterCard.checked) {
        maintext.textContent = `You are paying with MasterCard!`;
    }
    else if (PayPal.checked) {
        maintext.textContent = `You are paying with PayPal`;
    }
    else {
        maintext.textContent = `Select a payment Method!`;
    }
}

