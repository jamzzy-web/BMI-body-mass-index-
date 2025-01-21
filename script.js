document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmi = weight / (height * height);
    document.getElementById('result').textContent = `Your BMI: ${bmi.toFixed(2)}`;
});
