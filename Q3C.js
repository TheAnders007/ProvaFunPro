let animal = {
	nome: "Dogui",
	especie: "Canis lupus"
}

let cachorro = {raca: "Chihuahua",__proto__:animal}

console.log(cachorro.nome);
console.log(cachorro.especie);
console.log(cachorro.raca);


let puppy1 = Object.create(cachorro);
console.log(puppy1.nome);
console.log(puppy1.especie);
console.log(puppy1.raca);

let puppy2 = Object.create(cachorro);
console.log(puppy2.nome);
console.log(puppy2.especie);
console.log(puppy2.raca);

