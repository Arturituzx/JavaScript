/*let numero = -5.500;
let palabra = 'Hola Mundo';
let respuesta = false;
const PI = 3.14;
numero = 100;
palabra = 'Soy gay';
respuesta = false;
console.log(numero);
console.log(palabra);
console.log(respuesta);
console.log(PI);*/



/*Operadores Mate*/
/*let a = 5;
let b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(a%b);
let usuario = 'otaku';
console.log('Hola '+ usuario);*/

/* Operadores Incrementeo y Decremento*/
/*let a = 5;*/
/* Suma*/
/*console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
/*console.log(a);*/


/*Resta*/
/*console.log(a--);
console.log(a);
console.log(--a);
console.log(a);*/

/*Operadores Asignación*/
/*let a = 15; 
a +=3;
console.log(a);
a -= 3;
console.log(a);
a *= 3;
console.log(a);
a /= 3;
console.log(a);
a %= 3;
console.log(a);
*/
const numbers = document.getElementById("numbers");
const result = document.getElementById( "result")
let a = prompt('Introduza numero 1:')
let b = prompt('Introduza numero 2:')
let c = prompt('Introduza numero 3:')
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
numbers.textContent = `Los número introducidos son ${a}, ${b} y ${c}.`

if(a >= b && a>=c){
    if(b>c){
        result.textContent = `${c}, ${b}, ${a}`
    }else{
        result.textContent = `${b}, ${c}, ${a}`
    }
} else if(b>=a && b>=c){
    if(a>=c){
        result.textContent = `${c}, ${a}, ${b}`
    }else{
        result.textContent = `${a}, ${c}, ${b}`
    }
} else if(c>=a && c>=b){
    if(a>=b){
        result.textContent = `${b}, ${a}, ${c}`
    }else{
        result.textContent = `${a}, ${b}, ${c}`
    }
}









