
// An array of animal objects to add to the page.
// You can add more animals here and they will be shown on the page.
// Try adding an entry for Goat. There is already an image for it in the images
// folder images/goat.jpg
// This could easily be moved to a JSON file and loaded from there.
const animals = [
  {
    name: 'Cat',
    description: 'A cat is a small animal that likes to purr.',
    nutrition: 'Carnivore',
    weight: 4,
    image_location: 'images/cat.jpg'
  },
  {
    name: 'Dog',
    description: 'A dog is (allegedly) man\'s best friend.',
    nutrition: 'Carnivore',
    weight: 25,
    image_location: 'images/dog.jpg'
  },
  {
    name: 'Cow',
    description: 'A cow is a large herbivore that lives on a farm.',
    nutrition: 'Herbivore',
    weight: 750,
    image_location: 'images/cow.jpg'
  },
  {
    name: 'Pig',
    description: 'A pig is an intelligent animal that also lives on a farm.',
    nutrition: 'Omnivore',
    weight: 300,
    image_location: 'images/pig.jpg'
  },
]

/*
Add the animals above to the HTML page, respecting the filters, if any values
have been selected.
*/
function showAnimals() {
  // Div containing articles about the animals.
  var animals_container = document.getElementById('animals')
  // Remove all current animal divs so we can replace with new ones below.
  // If we don't do this the divs we add below will just be added after whatever
  // is already on the page.
  while (animals_container.firstChild) {
    animals_container.removeChild(animals_container.firstChild);
  }

  var selected_nutrition = document.getElementById('nutrition-selector').value
  var selected_min_weight = document.getElementById('min-weight-selector').value


  for (i = 0; i < animals.length; i++){
    var current_animal = animals[i];

    // The following two variables are boolean values
    // nutrition_correct is equal to true either if the selected option is all
    // or the current animal's nutrition value is the same as that selected.
    var nutrition_correct = (selected_nutrition == 'all' ||
                             current_animal.nutrition == selected_nutrition)

    // I decided to shorten the code required here by setting the default
    // value in the select menu to 0 intead of 'all' like in nutrition,
    // because a minimum weight of 0 would include all animals. This means
    // we only have to check whether the selected min. weight is less than/equal
    // to the animal's weight (which is more elegant than
    // (selected_min_weight == 'all' || selected_min_weight <= current_animal.weight)
    var min_weight_correct = (selected_min_weight <= current_animal.weight)

    // Only show animals with the correct nutrition and weight
    if (nutrition_correct && min_weight_correct){
      var animal_div = generate_animal_html(current_animal)
      animals_container.appendChild(animal_div)
    }
  }
}


/* Generate a div for a single animal, e.g.
<div class="animal">
  <h3>Cat</h3>
  <img src="images/cat.jpg">
  A cat is a small animal that likes to purr.
  <br>
  <br>
  Nutrition: Carnivore
  <br>
  Weight: 4kg
</div>
*/
function generate_animal_html(animal){
  var animal_div = document.createElement('div')
  animal_div.setAttribute('class', 'animal') // Give div class="animal"
  var header = document.createElement('h3')
  header.innerHTML = animal.name
  var image = document.createElement('img')
  image.setAttribute('src', animal.image_location)
  var description = document.createTextNode(animal.description)
  var nutrition = document.createTextNode('Nutrition: ' + animal.nutrition)
  // image.setAttribute('onclick', 'changeFilter(\"' + animal.nutrition + '\")')
  var weight = document.createTextNode('Weight: ' + animal.weight + 'kg')
  animal_div.appendChild(header)
  animal_div.appendChild(image)
  animal_div.appendChild(description)
  animal_div.appendChild(document.createElement('br'))
  animal_div.appendChild(document.createElement('br'))
  animal_div.appendChild(nutrition)
  animal_div.appendChild(document.createElement('br'))
  animal_div.appendChild(weight)

  return animal_div
}

showAnimals()
