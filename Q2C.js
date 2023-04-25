
let x = function(){
    return function(){
        console.log("Função retorna outra função.");
    }
}
x()();