const Submit = document.getElementById("Submit");
const Input = document.getElementById("scoreInput");
const Output = document.getElementById("output");

function getGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return 'D';
    }
    else {
        return "F";
    }

}
Submit.onclick = function () {
    let score = Input.value;
    score = Number(score);

    if (score < 0 || score > 100 || isNaN(score)) {
        Output.textContent = "Please enter a value between 0-100!";
        Output.style.color = "red";
        return;
    }


    let grade = getGrade(score);
    Output.textContent = "Your grade is:" + grade;
    //Aplying Color depending on Grade.
    if (grade === "A") {
        Output.style.color = "green";
        Output.textContent = "Your grade is:" + grade + "👍";
    }
    if (grade === "B" || grade === "C") {
        Output.style.color = "orange";
        Output.textContent = "Your grade is:" + grade + "😜";
    }
    else if (grade === "D") {
        Output.style.color = "black";
        Output.textContent = "Your grade is:" + grade + "😢";
    }
    else {
        Output.style.color = "red";
        Output.textContent = "Your grade is:" + grade + "🤦‍♂️";
    }
}
