//Interfacesd

interface Carro {
  nombre : string,
  anio : number,
  seRompio: boolean
}

const carrosViejos = {
  nombre: 'tsuru',
  anio: 2000,
  seRompio: true,
};

const imprimirCarro = (carro:  Carro): void => {
  console.log(`Nombre :${carro.nombre} Año : ${carro.anio}, Rompe : ${carro.seRompio}`)

};

imprimirCarro(carrosViejos);