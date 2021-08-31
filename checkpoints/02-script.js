/*
                         (Weight on Earth)
      Jupiter Weight =  -------------------- * (Planet Value)
                        (Earth Gravity Value)
*/

function calculate() {
   // Run the calculation for each planet! This function
   // gets called when the button is clicked. This happens
   // because of the last line in this file, which sets up
   // the button click handler

   // First, get the value from the input box on the page
   let weight = document.getElementById('weight').value;
   weight = Number(weight);
   console.log(`Starting calculation with a weight of: ${weight} lbs`);

   // Loop over our array of planets, and calculate new gravity for each
   // Append each calculation along with planet name and image to the page!
   for (let planet of planets) {
      // Convert from earth weight to planetary weight by dividing
      // by the coefficient of earth (9.8 meters per second squared) and
      // multiplying by this planet's weight.
      let planetWeight = (weight / 9.8) * (planet.coef);
      console.log(`Found weight for planet ${planet.name}: ${planetWeight} lbs`);
   }
   
}

// When the calculator button is clicked, call the calculate() function
document.getElementById('calculate-button').addEventListener('click', calculate);