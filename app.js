//RESPUESTA #1 con función flecha e if else

const palindromo = (texto) => {
    let reverso = texto.split("").reverse().join("");
  
    if (texto === reverso) {
        console.log(`${texto} si es un palindromo - Código con función flecha e if else `);
    } else {
        console.log(`${texto} no es un palindromo - Código con función flecha e if else `)
    }
}

const nuevoPalin = palindromo("acurruca");
const nuevoPalin2 = palindromo("nevera");


//RESPUESTA #2 con función 

function palindromo2(texto2) {
    let reverso2 = texto2.split('').reverse().join('');

    return (reverso2 === texto2)
}

console.log("es un palindromo? " + palindromo2 ("acurruca") + " - Código con función");
console.log("es un palindromo? " + palindromo2 ("nevera") + " - Código con función");

//RESPUESTA #3 sin métodos incorporados

function palindromo3(texto3) {
    let nuevaCadena = "";

    for (let i = texto3.length - 1; i >= 0; i--) {
        nuevaCadena += texto3[i]; } 

    if (nuevaCadena === texto3) {
            console.log(`${texto3} si es palindromo - Código sin métodos incorporados`);
    } else {
            console.log(`${texto3} no es palindromo - Código sin métodos incorporados`);
    }
}

palindromo3("acurruca");
palindromo3("nevera");

//RESPUESTA #4 con ternario

const palindromo4 = (texto4) => {
    let reverso4 = texto4.split("").reverse().join("");

    palabra = texto4 === reverso4  ? `${texto4} si es un palindromo - Código con ternario` : `${texto4} no es un palindromo - Código con ternario`
}

const nuevoPalin3 = palindromo4("acurruca");
console.log(palabra);
const nuevoPalin4 = palindromo4("nevera");
console.log(palabra);
