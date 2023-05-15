/*
function solicitarNombreUsuario(){
    let nombre = prompt('ingrese su nombre: ');
    console.log('Su nombre es ' + nombre);
}


solicitarNombreUsuario();
solicitarNombreUsuario();
solicitarNombreUsuario();
solicitarNombreUsuario();




function sumarDosNumeros(){
    let num1 = parseInt(prompt('Ingrese un numero:'));
    let num2 = parseInt(prompt('Ingrese otro numero:'));
    let resultado = num1 + num2;
    alert(resultado);
}


sumarDosNumeros();


function saludar (nombre, apellido){
    alert('Bienvenido ' + nombre + ' ' + apellido);
}
let nombreUsuario = Salvador;
let apellidoUsuario = Roldan;


saludar(nombreUsuario, apellidoUsuario);



function multiplicar(num1, num2){
    alert(num1*num2);
}
let num1= 10;
let num2 = 5;

multiplicar(num1*num2);




let restar = (numero1, numero2) => {
 alert(numero1-numero2);

}
let numero1 = 100;
let numero2 = 30;


restar(numero1, numero2); 


function multiplicar(nro1, nro2){
    let resultado = nro1*nro2;
    return resultado;
}
let nro1 = 10;
let nro2 = 5
multiplicar(nro1, nro2);
alert(multiplicar(nro1, nro2));
*/




/* CLASE 6 
   BUCLES FOR*/
/*
let productos = ['Mac', 'Iphone', 'AppleWatch','Airpods', 'Ipad'];
for (let i=o ; i<5 ; i++){
    console.log('hola');
}
*/
/*
for (let i=0 ; i < productos.length; i++){
    console.log("Producto: " + productos [i]);
}
*/


/* BUCLES WHILE */
/*
let i = 0;
while(i<10){
    console.log('Vuelta numero: ' + i)
}
*/
/*
let i=0;
while(i < 20){
    let suma = parseInt(prompt('Ingrese un numero'));
    i+=suma;
}
*/
/*
let productos = ['Mac', 'Iphone', 'AppleWatch','Airpods', 'Ipad'];
let i = 0;
let encontrado = false;
while(i < productos.length && encontrado == false){
    let productoBuscado= prompt('Que producto esta buscando?');
    if(productoBuscado == producto[i]){
        productoBuscado = true;
        console.log('Tenemos su producto');
    } else{
        i++;
    }
}
*/


/* DO WHILE */
/*
let edad;

do{
    edad = parseInt(prompt('Ingrese su edad: (entre 0 y 120)'))
} while (edad < 0 || edad > 120)
*/
/*
const miPassword = Hola123
let passwordIngresada;
do{
    passwordIngresada=prompt('Ingrese su password correctamente')
} while(miPassword != passwordIngresada)
*/
/*
const usuarioOriginal = 'Salva Roldan';
const passwordOriginal = 'Salvaroldan123';

let usuarioIngresado;
let passwordIngresada;
do{
 usuarioIngresado = prompt('Ingrese su usuario: ');
 passwordIngresada = prompt('Ingrese su contrasenia correctamente: ')
}while(usuarioOriginal != usuarioIngresado || passwordOriginal != passwordIngresada)
*/

