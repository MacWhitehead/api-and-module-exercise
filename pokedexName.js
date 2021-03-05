const addPhoto = document.getElementById("pokemonPhoto");
const abilities = document.getElementById("abilities");
const type = document.getElementById("type");
const pokemonName = document.getElementById("nameInput");

async function pullByName() {
  const pokemonData = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.value
      .replace(/\W/g, "")
      .toLowerCase()}/`
  ).catch(handleError())
  return await pokemonData.json();
}

const handleError = () => {
  addPhoto.innerHTML = `Whoops! That Pokémon doesn't exist, or the spelling is incorrect. Please try again.`;
};

export async function getDefault() {
  let pokeData = await pullByName();
  addPhoto.innerHTML = `<img src="${pokeData.sprites.front_default}" />`;
  type.innerHTML = `<h5> Type: </h5> <p> ${pokeData.types[0].type.name} </h5>`;
  checkAbilities(pokeData);
}

export function checkAbilities(getPokemonData) {
  abilities.innerHTML = "";
  abilities.innerHTML += `<h5> Abilities: </h5>`;
  for (let i = 0; i < getPokemonData.abilities.length; i++) {
    abilities.innerHTML += `<li>${getPokemonData.abilities[i].ability.name}</li>`;
  }
}
