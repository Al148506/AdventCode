const fs = require('fs')
const data = fs.readFileSync('2015/Day_3/input.txt', 'utf8') // Lee el archivo como texto
const casas= (calculate(data))
console.log("Se recorrieron un total de: " + casas.length + " casas")

function calculate(data) {
    var input = data.split('')
    var posicion = { 'posX': 0, 'posY': 0 }
    var posicionrb  = { 'posX': 0, 'posY': 0}
    var casasVisitadas = new Set(); // Usamos un Set para evitar duplicados de casas visitadas
    // Inicializar las posiciones de Santa y el robot
    casasVisitadas.add('0,0'); 

    input.forEach((element,index) => {
        // Determinar cuál se mueve: Santa o el robot
        let posicionActual = (index % 2 === 0) ? posicion : posicionrb;
        switch (element) {
            case '<':
                posicionActual.posX--;
                break
            case '>':
                posicionActual.posX++;
                break
            case '^':
                posicionActual.posY++;
                break
            case 'v':
                posicionActual.posY--;
                break
            }
       
        // Agregar la nueva posición al Set de casas visitadas
        casasVisitadas.add(`${posicionActual.posX},${posicionActual.posY}`);
    });

    // Convertir el Set a un array para obtener la cantidad de casas visitadas
    return Array.from(casasVisitadas);   
}