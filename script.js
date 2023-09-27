const myProblem = () => {
    var answ = document.getElementById("in1").value;
    if (answ == "x^3 + 11x^2 + 26x +16")
    {
        return "Good Job!";
    }
        else return "Try Again!"
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}


const myProblem2 = () => {
    return "x^3 + 11x^2 + 26x +16";
};
const myCalc2 = () => {
    document.getElementById("demo").innerHTML = myProblem2();
}