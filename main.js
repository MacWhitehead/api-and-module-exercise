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
