const person = {
  first: "benjamin",
  last: "cook",
  age: 30
}

//console.log(person.first)
//console.log(person['last']);

const meal ={
  appetizers: "chips & salsa",
  entree: "carne asada burrito",
  dessert: "tres leches",
  drink: "horchata"
}

const meal2 ={
  appetizers: "ceviche",
  entree: "loaded nachos",
  dessert: "fried ice cream",
  drink: "cerveza"
}

let { dessert } = meal;
//let dessert = meal.dessert;

let {drink,appetizers,dessert,entree,} = meal;

console.log(entree + "with" + drink)

let newFav = "Dr.P";
 
meal.drink = newfav;

const {drink: drink2, appetizers: app2, dessert: des2, entree: delicious}= meal2;


//loop over meal2
// if the key dessert update the value to be cburros snd print to console else print the value

for(let key in meal2){
  if (key === "dessert"){
    meal2[key] = "churros"
    console.log(meal2[key]);
  }else{
    console.log(key)
  }
}

let teams = {
  teamOne: ["ryan", "alex", "wyatt", "tj"],
  teamTwo: ["henry", "cole", "charlie", "zeke"],
  teamThree: ["porter", "blake", "june", "owen"],
  teamFour: ["brian", "riley", "ezra", "jordan"],
  teamFive: ["grey", "milo", "mckay", "leo"],
};

teams.[teamSix]= ["jared", "kyle","bob", "jordan"];

delete teams.teamFour;

console.log(teams);