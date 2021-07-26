const carroMade : string[]  = ['ford','tsuru','chevy'];
const dates = [new Date(), new Date()];

//carrosHecho = [ []]
const carrosHecho: string[][] = [];

//Como es la inferencia cuando se extrae valores

const car = carroMade[0]

//PREVENIR valor incompatible
//carroMade.push(100)

//Ayuda con map
carroMade.map((car : string) :string => {
  return car.toLowerCase();
} )

//Cuando usar la matriz en type cuando queremos representar un arreglo diferente para ordenar