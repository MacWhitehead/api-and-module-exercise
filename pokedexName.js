const addPhoto = document.getElementById('pokemonPhoto');
const abilities = document.getElementById('abilities');
const type = document.getElementById('type');
const pokemonName = document.getElementById('nameInput');

async function pullByName() {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}/`);
    return await pokemonData.json();
}

export async function getDefault() {
    let pokeData = await pullByName()
    let thePhoto = pokeData.sprites.front_default;
    let pokemonType = pokeData.types[0].type.name;
    addPhoto.innerHTML = `<img src="${thePhoto}">`;
    type.innerHTML = `<p> Type: ${pokemonType} </p>`;
    checkAbilities(pokeData);
}


export function checkAbilities(getPokemonData) {
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
    abilities.innerHTML = `<p> Abilities: ${ability1}, ${ability2}, & ${ability3} `
}