let Brasil = {
     Nordeste: 56.1,
     Sudeste: 85.1,
     Centro_Oeste: 15.2,
     Sul: 29,
     Norte: 17.3,
     Total(){
       console.log("Total: " + (this.Nordeste + this.Sudeste + this.Centro_Oeste + this.Sul + this.Norte) + " milhões de habitantes.");
     }
  }

for (x in Brasil){
  if (x != "Total"){
      Brasil[x] = parseInt(prompt("Digite a quantidade de habitantes da região " + x + ": "));
    }
}

Brasil.Total();
