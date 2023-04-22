function Livro(titulo, autor, ano){
	this.titulo = titulo;
	this.autor = autor;
	this.ano = ano;
	this.informacoes = function() {
		console.log("Título: " + this.titulo + ", Autor: " + this.autor + ", Ano: " + this.ano + ".");
	}
}

const livro1 = new Livro("Senhora", "José de Alencar", 1875);

livro1.informacoes();

const livro2 = new Livro("Os Servos da Morte", "Adonias Filho", 1946);

livro2.informacoes();
