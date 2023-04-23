const carro = {
	marca: "Chevrolet",
	modelo: "Onix",
	ano: 2013,
	cor: "cinza",
	idade() {
		let data;
		let X = 2023 - carro.ano; 
		console.log("Esse carro tem " + X + " anos de uso.");
	}
}

carro.idade();

