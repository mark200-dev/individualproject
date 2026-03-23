function bmi() {
    let w = weight.value;
    let h = height.value;
    let result = w / (h * h);
    bmiResult.innerHTML = "BMI = " + result.toFixed(2);
}