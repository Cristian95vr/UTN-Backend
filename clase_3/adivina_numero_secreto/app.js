const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza')
const obtenerNumeroUsuario = () => {
return readlineSync.question('Ingresa un número: ');
};
const juegoAdivinanza = () => {
const numeroSecreto = generarNumeroAleatorio();
let numeroAdivinado = 0;
console.log('¡Bienvenido a Adivina el número secreto!');
console.log('Intenta adivinar el número del 1 al 100.\n');
//Para que la aplicación continúe ejecutándose hasta que el usuario adivine el número usamos "while".
while (numeroAdivinado !== numeroSecreto) { 
numeroAdivinado = obtenerNumeroUsuario();
verificarAdivinanza(numeroSecreto, numeroAdivinado);
}
};
juegoAdivinanza();
