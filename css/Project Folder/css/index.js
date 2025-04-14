//Rest Parameter;


//Custom Order Builder:Spread Operator and Rest Parameters;
//Step 1

const BaseOrder = ["Pizza", "Burger", "Fries"];
const Toppings = ["Cheese", "Olives", "Mushrooms"];
const Finalorder = [...BaseOrder, ...Toppings];
console.log("Your final order is:");
for (let i = 0; i < 6; i++) {
    console.log(Finalorder[i]);
}
//Step 2;
console.log("Special Instructions::");
function instructions(...extranotes) {
    for (let i = 0; i < 3; i++) {
        console.log(extranotes[i]);
    }
}
instructions("Extra Napkins", "No Onions on the burger", "Cut Pizza into 8 slices");



const Submit = document.getElementById("mySubmit");
const menu = document.getElementById("menu");
const result = document.getElementById("result");
const result2 = document.getElementById("result-2");
const quantity = document.getElementById("quantity");
let amount;
let Selected;
const pizza = 8.99;
const burgar = 5.99;
const fries = 3.99;
const cheese = 2.50;
const olives = 1.50;
const mushrooms = 0.50;

Submit.onclick = function () {
    Selected = menu.value;
    amount = quantity.value;
    amount = Number(amount);


    if (Selected === "PIZZA" && amount > 0) {
        const total1 = amount * pizza;
        result.textContent = `You have selected PIZZA.Your order will be:$${total1}`;

    }
    else if (Selected === "BURGER" && amount > 0) {
        const total2 = amount * burgar;
        result.textContent = `You have selected BURGER.Your order will be $${total2}`;

    }
    else if (Selected === "FRIES" && amount > 0) {
        const total3 = amount * fries;
        result.textContent = `You have selected FRIES.Your order will be $${total3}`;

    }
    else if (Selected === "CHEESE" && amount > 0) {
        const total4 = amount * cheese;
        result.textContent = `You have selected CHEESE.Your order will be $${total4}`;

    }
    else if (Selected === "OLIVES" && amount > 0) {
        const total5 = amount * olives;
        result.textContent = `You have selected OLIVES.Your order will be $${total5}`;

    }
    else if (Selected === "MUSHROOMS" && amount > 0) {
        const total6 = amount * mushrooms;
        result.textContent = `You have selected MUSHROOMS.Your order will be $${total6}`;

    }

    else {
        result.textContent = "Please select a menu item!";
    }

}
