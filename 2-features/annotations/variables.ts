//Asiganamos que tipo de variable es a la constante

/**
 * Las anotaciones se pueden agregar en las cuales son number,boolean, void, string, null, syumbol 
 * y en los object tupos functions array, class
 * Entonces se puede aghregar en cualquier de esois mencionado
 * 
 */



let apples : number = 5;
let speed: string = "hoas" ;
let hasname: boolean = true;

let Nada: null = null;
let nothing: undefined = undefined;

// built in object

let now : Date = new Date();

//Array
let colors: string[] = ['red','azul','blue'];

let myNumberos: number[] = [1,2,3,4,5];
let truths: boolean[] = [true,false,false]


//classes

class Car {

}

let car: Car = new Car();

//object litreal
let potin : { x: number; y: number } = {
  y:10,
  x:20
}

//Function

// const logNumber = (i : number) => void = (i: number) => {
//   console.log(i)
// };


// When yo use annotations
///1 Una funcion que regresa un tipo 'any'
const json = '{"x":10, "y": 20}';
const coordinate: {x: number; y: number} = JSON.parse(json);
console.log(coordinate)  /// {x: 10, y: 20}

//") When we declare a variable on one line
//And initalizaee it later
let words = ['rojo','azul'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
  if(words[i] === 'rojo'){
    foundWord = true;
  }
}


// 3) V aria puede ser inferedido correctamente = pero esto no se debe de hacer
let numbers = [-10,-1,-12];
let numberAcercaZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0){
    numberAcercaZero = numbers[i];
  }
}

