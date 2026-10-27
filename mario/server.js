import promptSync from 'prompt-sync';

async function main() {

const url = 'https://rickandmortyapi.com/api/character';

const prompt = promptSync();
let characterNumber = Number(prompt("Introduce un número (1-826) => "));

while (isNaN(characterNumber) || !Number.isInteger(characterNumber) || 1>characterNumber || characterNumber>826) {

characterNumber = Number(prompt("Error. Introduce un número (1-826) => "));
}

const response = await fetch(url+"/"+characterNumber);
const data = await response.json();


console.log("Nombre : "+ data.name );
console.log("Especie : "+ data.species );
console.log("Origen : "+ data.origin.name );
console.log("Aparece en : "+ data.episode.length+" episodios" );

}

main().catch(console.error);