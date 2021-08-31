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

   // Second, convert the value to a numeric value so we can use math
   weight = Number(weight);
   console.log(`Starting calculation with a weight of: ${weight} lbs`);
   alert(`Starting calculation with a weight of: ${weight} lbs`);
}

// When the calculator button is clicked, call the calculate() function
document.getElementById('calculate-button').addEventListener('click', calculate);