/*
                         (Weight on Earth)
      Jupiter Weight =  -------------------- * (Planet Value)
                        (Earth Gravity Value)
*/

function calculate() {
   // Run the calculation for each planet! This function
   // get called when the button is clicked. This happens
   // because of the last line in this file, which sets up
   // the button click handler

   // First, get the value from the input box on the page
   let weight = document.getElementById('weight').value;

   // Second, convert the value to a numeric value so we can use math
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

      // Create some new html, and insert it into the document at the end of
      // the #planets container. We use a 'planet' class which will be
      // controlled in CSS to give it colors, dimensions, alignment, etc.
      // We can also access the image URL by using planet.image
      document.getElementById('planets').insertAdjacentHTML('beforeend', `
         <div class='planet'>
            <h2>${planet.name}</h2>
            <img src='${planet.image}' />
            <p>On ${planet.name} your dog's weight would be <strong>${planetWeight.toFixed(2)}lbs</strong></p>
         </div>
      `);
   }
   
}

// When the calculator button is clicked, call the calculate() function
document.getElementById('calculate-button').addEventListener('click', calculate);