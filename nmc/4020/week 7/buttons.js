let drinkObj = {
    "Coffee": "A breakfast staple. I prefer mine with light sugar and milk.",
    "Tea": "An all-kind-of-day drink. My favorites are herbal teas, jasmine, matcha, and chai teas.",
    "Lemonade": "My go-to drink at restauraunts. Best if homemade with real lemons.",
    "Juice": "Super versatile. Can come in an unlimited number of flavors and combinations.",
    "Smoothie": "Great for a quick snack. Can be a meal replcement.",
    }
    
    let imgs = {
      Coffee: "coffee.jpeg",
      Tea: "tea.jpeg",
      Lemonade: "lemonade.jpeg",
      Juice: "juice.jpeg",
      Smoothie: "smoothie.jpeg",
    }
    
    let drinkArr = ["Coffee","Tea","Lemonade","Juice","Smoothie"];
    
    let drink = document.querySelector('#drinks');
    let drinkImg = document.querySelector('#drinkImg');
    
    function drink(drink){
      let chooseDrink = " "
      drink.innerHTML = chooseDrink + drinkObj[drink];
      drinkImg.innerHTML = chooseDrink + "<img src=img/" + imgs[drink]+">";
    }