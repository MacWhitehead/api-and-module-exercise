import { getDefault } from './pokedexName.js';
import { getRandom } from './pokedexNumber.js';

const submitButton = document.getElementById('submit');
const pokemonRandom = document.getElementById('randomSubmit');


submitButton.addEventListener('click', event => {
    getDefault();
})


pokemonRandom.addEventListener('click', event => {
    getRandom();
})


// async function getDefault() {
//     const getPokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}/`)
//         .then(response => response.json())
//         // .then(data => console.log())
//         .then(data => data);
//     let thePhoto = getPokemonData.sprites.front_default;
//     let pokemonType = getPokemonData.types[0].type.name;
//     addPhoto.innerHTML = `<img src="${thePhoto}">`;
//     type.innerHTML = `<p> Type: ${pokemonType} </p>`;
//     checkAbilities(getPokemonData);
// }