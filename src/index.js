// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);

// for (let i = 0; i < data.length; i++) {
//   let pokemon = data[i];
// }

function cardCrafter(pokemonData) {
  //function to turn pokemon data into card and write to page
  let newCard = document.createElement("li"); //makes a card
  newCard.classList.add("card");

  const pokeName = document.createElement("h2"); //create h2 element
  pokeName.textContent =
    pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1); //populates name info
  newCard.appendChild(pokeName);

  const pokeImage = document.createElement("img"); //create img element
  pokeImage.setAttribute("width", "256");
  pokeImage.setAttribute("class", "card--img");
  pokeImage.setAttribute(
    "src",
    pokemonData.sprites.other["official-artwork"].front_default //populates img src
  );
  newCard.appendChild(pokeImage);

  const pokeStats = document.createElement("ul"); //create initial list for stats
  for (let i = 0; i < pokemonData.stats.length; i++) {
    //loop to populate each stat with info
    let tempStat = pokemonData.stats[i];
    let statElement = document.createElement("li");
    const statName = tempStat.stat.name;
    const statValue = tempStat.base_stat;
    statElement.textContent = `${statName}: ${statValue}`.toUpperCase(); //populates stat info
    pokeStats.appendChild(statElement);
  }
  newCard.appendChild(pokeStats); //appends filled list to card

  document.querySelector(".cards").appendChild(newCard); //appends finished card to page
}

for (let i = 0; i < data.length; i++) {
  const pokemonData = data[i];
  cardCrafter(pokemonData);
}
