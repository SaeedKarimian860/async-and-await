//SEQUENTIAL REQUESTS!
// async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }



//PARALLEL REQUESTS!
// async function get3Pokemon() {
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }
// get3Pokemon();



// function changeBodyColor (color, delay) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     });
// }

// async function lightShow() {
//     await changeBodyColor('teal', 1000);
//     await changeBodyColor('pink', 1000);
//     await changeBodyColor('indigo', 1000);
//     await changeBodyColor('violet', 1000);
// }

// async function lightShow() {
// const p1 = changeBodyColor('teal', 1000);
// const p2 = changeBodyColor('pink', 1000);
// const p3 = changeBodyColor('indigo', 1000);
// const p4 = changeBodyColor('violet', 1000);
// await p1;
// await p2;
// await p3;
// await p4;
// }

// lightShow();



//PARALLEL REQUESTS!
async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const results = await Promise.all([prom1, prom2, prom3]);
    printPokemon(results);
}

function printPokemon(results) {
    for(let pokemon of results) {
        console.log(pokemon.data.name);
    }
}
get3Pokemon();