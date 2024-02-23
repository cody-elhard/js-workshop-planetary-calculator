function calculate() {
   let weight = document.getElementById('weight').value;
   weight = Number(weight);
   console.log(`Starting calculation with a weight of: ${weight} lbs`);
   for (let planet of planets) {
      let planetWeight = (weight / 9.8) * (planet.coef);
      console.log(`Found weight for planet ${planet.name}: ${planetWeight} lbs`);
   }
}
document.getElementById('calculate-button').addEventListener('click', calculate);
