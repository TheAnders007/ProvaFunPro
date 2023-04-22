function somaInterv(n){
  if(n==1) return 1;
  return n + somaInterv(n-1);
}
let num = parseInt(prompt("Digite um número: "));
console.log(somaInterv(num));