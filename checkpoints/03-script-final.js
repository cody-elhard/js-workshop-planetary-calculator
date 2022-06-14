function calculate() {
   let weight = document.getElementById('weight').value;
   weight = Number(weight);
   console.log(`Starting calculation with a weight of: ${weight} lbs`);

   document.getElementById('planets').innerHTML = '';
   for (let planet of planets) {
      let planetWeight = (weight / 9.8) * (planet.coef);
      console.log(`Found weight for planet ${planet.name}: ${planetWeight} lbs`);

      document.getElementById('planets').insertAdjacentHTML('beforeend', `
         <div class='planet'>
            <h2>${planet.name}</h2>
            <img src='${planet.image}' />
            <p>On ${planet.name} your dog's weight would be 
               <strong>${planetWeight.toFixed(2)}lbs</strong>
            </p>
         </div>
      `);
   }
}
document.getElementById('calculate-button').addEventListener('click', calculate);