function add() {
    let a = Number(num1.value);
    let b = Number(num2.value);
    calcResult.innerHTML = a + b;
}

function sub() {
    calcResult.innerHTML = num1.value - num2.value;
}

function mul() {
    calcResult.innerHTML = num1.value * num2.value;
}

function div() {
    calcResult.innerHTML = num1.value / num2.value;
}