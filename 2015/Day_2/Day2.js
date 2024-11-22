const fs = require('fs');
const data = fs.readFileSync('2015/Day_2/input.txt', 'utf8'); // Lee el archivo como texto
const result= (calculate(data));
console.log("El total de papel en pies: " + result.paper + 
    " y el total de liston en pies: " + result.ribon);


function calculate(data) {
    // Divide los datos por líneas
    const lines = data.trim().split('\n');
    let paper = 0;
    let ribon = 0;

    lines.forEach((line) => {
        // Divide cada entrada en sus componentes l, w, h
        const [l, w, h] = line.split('x').map(Number);

        // Calcular el área total de la superficie
        const volume = 2 * l * w + 2 * w * h + 2 * h * l;

        // Encontrar las dos dimensiones más pequeñas para calcular el área del lado más pequeño
        const smallestSides = [l, w, h].sort((a, b) => a - b); // Ordena las dimensiones
        const smallestArea = smallestSides[0] * smallestSides[1];
        const smallestPerimeter = (smallestSides[0] * 2) + (smallestSides[1] * 2);
        const bow = l* w * h;
        // Sumar el volumen y el área más pequeña al resultado
        paper += volume + smallestArea;
        ribon += smallestPerimeter + bow;
        });
    return {paper, ribon};
}
