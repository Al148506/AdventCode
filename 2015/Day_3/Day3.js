const fs = require('fs');
const data = fs.readFileSync('2015/Day_3/input.txt', 'utf8'); // Lee el archivo como texto
const result= (calculate(data));
console.log("Se recorrieron un total de: " + result.length + " casas")

function calculate(data) {
    var input = data.split('');
    var posicion = { 'posX': 0, 'posY': 0 }
    var casas = []
    casas.push({ 'posX': 0, 'posY': 0 })
    console.log(posicion)
    input.forEach((element) => {
        switch (element) {
            case '<':
                posicion.posX--
                console.log(posicion)
                break
            case '>':
                posicion.posX++
                console.log(posicion)
                break
            case '^':
                posicion.posY++
                console.log(posicion)
                break
            case 'v':
                posicion.posY--
                console.log(posicion)
                break
        }
        if (casas.find((elemento) => elemento.posX === posicion.posX && elemento.posY === posicion.posY) === undefined) {
            casas.push({ 'posX': posicion.posX, 'posY': posicion.posY })}
    });
    return(casas);
}