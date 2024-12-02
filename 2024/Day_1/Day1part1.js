const fs = require('fs')
const data = fs.readFileSync('2024/Day_1/input.txt', 'utf8') // Lee el archivo como texto
const result = calculate(data)
console.log(result.dist)


function calculate(data){
  // Divide el texto en líneas
    let dist=0;
    const lines = data.split('\n');
    // Inicializa los arreglos
    const array1 = [];
    const array2 = [];
    // Procesa cada línea
    lines.forEach(line => {
        const [num1, num2] = line.trim().split(/\s+/).map(Number); // Divide por espacios en blanco y convierte a números
        array1.push(num1); // Añade el primer número al primer arreglo
        array2.push(num2); // Añade el segundo número al segundo arreglo
    });
    //Odenar los arreglos descendentemente
    array1.sort((x, y) => y - x);
    array2.sort((x, y) => y - x);
    //Obtener la distancia entre los dos arreglos
    array1.forEach((element,index) =>{
       dist += Math.abs(element - array2[index])
    });

    return { array1, array2,dist };
}
