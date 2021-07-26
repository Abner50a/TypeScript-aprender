//Interfacesd

interface Carro {
  nombre : string,
  anio : Date,
  seRompio: boolean,
  summary() : string;
}

const carrosViejos = {
  nombre: 'tsuru',
  anio: new Date(),
  seRompio: true,
  summary() : string {
    return `Name: ${this.nombre}`
  }
};

const imprimirCarro = (carro:  Carro): void => {
  //console.log(`Nombre :${carro.nombre} Año : ${carro.anio}, Rompe : ${carro.seRompio}`)
  console.log(carro.summary())
};

imprimirCarro(carrosViejos);