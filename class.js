class Dog{
  constructor(name, breed, age){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.hypoAllergenic = false;
  }

updateHypo(){
this.hypoAllergenic = true;
}

greeting(){
  console.log('HI, my name is ${this.name} and I am a  ${this.age} year old ${this.breed}');
}
}
const dog1 = new Dog("buddy","golden retriever", 5 )
const dog2 = new Dog("Alaska", "cockapoo", 3)

dog2.updateHypo();

//console.log(dog1);
//console.log(dog2)

dog1.greeting();


class puppy extends Dog {
  constructor (name, breed, age, color,){
  super(name, breed, age)

  this.color = color;
  this.trainingLevel = 0;
}

updateTraining(nun){
  this.trainingLevel += Num;
}
}

const puppers = new puppy("kevin","york shire terrior", .6, "brown/black")
const bubs = new puppy("wanda", "Irish Setter", 1, "golden/brown")

puppers.updateHypo();

bubs.updateTraining(1)

console.log(puppers);
puppers.greeting();

console.log(bubs);
bubs.greeting();