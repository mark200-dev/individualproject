function zakat() {
    let income = document.getElementById("income").value;
    let zakat = income * 0.025;
    zakatResult.innerHTML = "Zakat: RM " + zakat.toFixed(2);
}