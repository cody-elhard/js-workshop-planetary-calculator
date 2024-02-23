function calculate() {
  let weight = document.getElementById('weight').value;
  weight = Number(weight);
  console.log(`Starting calculation with a weight of: ${weight} lbs`);
  alert(`Starting calculation with a weight of: ${weight} lbs`);
}
document.getElementById('calculate-button').addEventListener('click', calculate);
