/* //Interfacesd

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

const drink = {
  color: 'cafe',
  carbonada: true,
  azucar: 40,
  summary() : string {
    return `Bebida tiene: ${this.color} ${this.azucar}`
  }
}

const imprimirCarro = (carro:  Carro): void => {
  //console.log(`Nombre :${carro.nombre} Año : ${carro.anio}, Rompe : ${carro.seRompio}`)
  console.log(carro.summary())
};

imprimirCarro(carrosViejos);
 */

//Interfacesd parte 2

interface Reporte {
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

const drink = {
  color: 'cafe',
  carbonada: true,
  azucar: 40,
  summary() : string {
    return `Bebida tiene: ${this.color} ${this.azucar}`
  }
}

const imprimirSummary = (item:  Reporte): void => {
  //console.log(`Nombre :${carro.nombre} Año : ${carro.anio}, Rompe : ${carro.seRompio}`)
  console.log(item.summary())
};

imprimirSummary(carrosViejos);
imprimirSummary(carrosViejos);