const button = document.getElementById("btn");
const formRef = document.getElementById("dino-compare");
const clearScreen = (ref) => {
  ref.remove();
};

const humanNameInput = document.getElementById("name");
let humanName = document.getElementById("name");
const humanFeet = document.getElementById("feet");
const humanInches = document.getElementById("inches");
const humanWeight = document.getElementById("weight").value;
const humanDiet = document.getElementById("diet").value;

function dinosaur(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}
//human constructor
function human(name, weight, height, diet) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}

let compareWeight;

let dinoArr = [];
fetch("dino.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.Dinos.forEach((dino) => {
      let dinoObj = new dinosaur(
        dino.species,
        dino.weight,
        dino.height,
        dino.diet,
        dino.where,
        dino.when,
        dino.fact
      );
      dinoArr.push(dinoObj);
    });
  });

function createHuman() {
  let height = parseInt(humanFeet) * 12 + parseInt(humanInches);
  return (myHuman = new human(
    humanName,
    "human",
    humanWeight,
    height,
    humanDiet,
    "fact goes here"
  ));
}
var myNewHuman;

// function getHumanData() {
//   return (function () {
//     const humanName = document.getElementById("name").value;
//     const humanFeet = document.getElementById("feet").value;
//     const humanInches = document.getElementById("inches").value;
//     const humanWeight = document.getElementById("weight").value;
//     const humanDiet = document.getElementById("diet").value;
//     let height = parseInt(humanFeet) * 12 + parseInt(humanInches);
//   })();
// }

function populateTiles() {
  clearScreen(formRef);
  dinoArr.splice(4, 0, myNewHuman);
  for (let i = 0; i < dinoArr.length; i++) {
    const tile = document.createElement("div");
    tile.className = "grid-item";
    tile.innerHTML = `<h2>${
      dinoArr[i].name
    }</h2> <img src="images"images/${dinoArr[
      i
    ].species.toLowerCase()}.png""/> <h3>${dinoArr[i].fact}</h3>`;
    document.querySelector("#grid").appendChild(tile);
  }
}

humanNameInput.addEventListener("change", (event) => {
  console.log;
});

button.addEventListener("click", () => {
  createHuman();
  populateTiles();
});
