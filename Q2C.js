let x;
function superior () {
    return function inferior() {
        x = console.log("A função retorna outra função.");
    }
}
superior()();
