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
    randomPokeName.innerHTML = `<h5> Name: </h5> <p> ${randomPokeData.name} </p>`
    addRanPhoto.innerHTML = `<img src="${randomPokeData.sprites.front_default}">`;
    ranType.innerHTML = `<h5> Type: </h5> <p> ${randomPokeData.types[0].type.name} </p>`;
    checkRanAbilities(randomPokeData);
}

export function checkRanAbilities(getPokemonData) {
    ranAbilities.innerHTML = ''
    ranAbilities.innerHTML += `<h5> Abilities: </h5>`
    for(let i = 0; i < getPokemonData.abilities.length; i++) {
        ranAbilities.innerHTML+= `<li>${getPokemonData.abilities[i].ability.name}</li>`
    }
}