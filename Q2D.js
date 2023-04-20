function hipotenusa (a, b){
    function elev2 (x){
        return x * x;
    }
    return Math.sqrt(elev2(a) + elev2(b));
}
c1 = parseInt(prompt("Digite o valor do primeiro cateto: "));
c2 = parseInt(prompt("Digite o valor do segundo cateto: "))
console.log("A hipotenusa com os catetos valendo", c1, "e", c2, "vale", hipotenusa(c1, c2), ".");
