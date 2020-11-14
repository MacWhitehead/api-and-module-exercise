const addRanPhoto = document.getElementById('ranPokemonPhoto');
const ranAbilities = document.getElementById('ranAbilities');
const ranType = document.getElementById('ranType');
const randomPokeName = document.getElementById('randomPokemonName');

function randomNumber() {
    let pokeNumber = Math.floor(Math.random() * 932) + 1;
    console.log(pokeNumber)
    return pokeNumber;
}

async function pullRandom() {
    const randomPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}/`);
    return await randomPoke.json();
}

export async function getRandom() {
    let randomPokeData = await pullRandom();
    let thePhoto = randomPokeData.sprites.front_default;
    let pokeName = randomPokeData.name;
    let pokemonType = randomPokeData.types[0].type.name;
    randomPokeName.innerHTML = `<p> Name: ${pokeName} </p>`
    addRanPhoto.innerHTML = `<img src="${thePhoto}">`;
    ranType.innerHTML = `<p> Type: ${pokemonType} </p>`;
    checkRanAbilities(randomPokeData);
}

export function checkRanAbilities(getPokemonData) {
    let ability1 = 'not learned yet';
    let ability2 = "not learned yet";
    let ability3 = "not learned yet";
    if (getPokemonData.abilities[0]) {
        ability3 = getPokemonData.abilities[0].ability.name;
    }
    if (getPokemonData.abilities[1]) {
        ability3 = getPokemonData.abilities[1].ability.name;
    }
    if (getPokemonData.abilities[2]) {
        ability3 = getPokemonData.abilities[2].ability.name;
    }
    ranAbilities.innerHTML = `<p> Abilities: ${ability1}, ${ability2}, & ${ability3} `
}