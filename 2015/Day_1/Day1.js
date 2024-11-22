const fs = require('fs');
const data = fs.readFileSync('2015/Day_1/input.txt', 'utf8'); // Lee el archivo como texto
const result = calculate(data);
console.log("El ultimo piso fue: " + result.piso + 
    " y la posición donde llegó al piso -1 por primera vez es: " + result.pos);

function calculate(data){
    var piso = 0;
    var input = data.split('');
    var condition= false;
    let pos = 0;
    input.forEach((element, index) => {
        element.includes('(') ? piso++ : piso--
        if(piso < 0 && !condition){
            pos = index + 1;
            condition=true;
        }
    });
    return { piso, pos };


}
