console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);

// for (let i = 0; i < data.length; i++) {
//   let pokemon = data[i];
// }

const pokemonData = data[0];

let newCard = document.createElement("li"); //makes a card

const pokeName = document.createElement("h2"); //makes a name heading
pokeName.textContent = pokemonData.name; //populates name info
newCard.appendChild(pokeName);

const pokeImage = document.createElement("img");
pokeImage.setAttribute("width", "256");
pokeImage.setAttribute("class", "card--img");
pokeImage.setAttribute(
  "src",
  pokemonData.sprites.other["official-artwork"].front_default
);
newCard.appendChild(pokeImage);

const pokeStats = document.createElement("ul"); //create initial list for stats
newCard.appendChild(pokeStats);

for (let i = 0; i > pokemonData.stats.length; i++) {
  //loop to populate each stat with info
  let tempStat = pokemonData.stats[i];
  let statElement = document.createElement("li");
  const statName = tempStat.stat.name;
  const statValue = tempStat.base_stat;
  statElement.textContent = `${statName}: ${statValue}`;

  pokeStats.appendChild(statElement);
}

document.querySelector(".cards").appendChild(newCard);
