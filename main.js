  //querySelectors
  var recipePickForm = document.querySelector('.recipe-item-form');
  var letsCookButton = document.querySelector('.lets-cook-button');
  var menuItemChoice = document.getElementsByName('options');
  var displayRecipeItem = document.querySelector('.random-recipe');
  var presentRecipeText = document.querySelector('.recipe-intro');
  var cookPot = document.querySelector('.cookpot');
  var clearButton = document.querySelector('.clear-button');
  var required = document.querySelector('.required');
  var loadingAni = document.querySelector('.loading');

  //event listeners
  letsCookButton.addEventListener('click', check);
  clearButton.addEventListener('click', clearPanel);


  //global variables
  var desserts = [
    "Banana Bread",
    "Ciambella",
    "French Silk Pie",
    "Cream Horns",
    "Rice Pudding",
    "Strawberry Champagne Cake"
  ];
  var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
  ];
  var mainDish = [
    "Ramen",
    "Nachos",
    "Burritos",
    "Tofu Potato Curry",
    "Lemon Seared Salmon",
  ];

  var menuOptions = {
    desserts: desserts,
    sides: sides,
    mainDish: mainDish
  };

  //functions

  //Data Model
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function check(){
    event.preventDefault();
      for (var i = 0; i < menuItemChoice.length; i++) {
           if (menuItemChoice[i].checked) {
                menuItemChoice[i].checked = false;
                return letsCookInput(menuItemChoice[i].value);
           }
         }
         required.classList.remove('hidden');
       }

  function letsCookInput(choice){
        if (choice === "Entire Meal") {
          displayFullMeal();
        }

      var result = menuOptions[choice][getRandomIndex(menuOptions[choice])];
      displayRecipe(result);
    }

  //DOM or Display

  function displayRecipe(recipe) {
    required.classList.add('hidden');
    displayRecipeItem.classList.remove('hidden');
    presentRecipeText.classList.remove('hidden');
    cookPot.classList.add('hidden');
    clearButton.classList.remove('hidden');

    displayRecipeItem.innerText = recipe + '!';
  }

  function displayFullMeal() {
    displayRecipeItem.classList.remove('random-recipe');
    displayRecipeItem.classList.add('random-recipe-smaller');

    var result = '';
    result += `${mainDish[getRandomIndex(mainDish)]} with a side `;
    result += `of ${sides[getRandomIndex(sides)]} and `;
    result += `${desserts[getRandomIndex(desserts)]} for dessert`;

    displayRecipe(result);
  }

  function clearPanel() {
    displayRecipeItem.classList.add('hidden');
    presentRecipeText.classList.add('hidden');
    cookPot.classList.remove('hidden');
    clearButton.classList.add('hidden');
    displayRecipeItem.innerText = '';
  }
