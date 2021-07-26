const bebida = {
  color: 'cafe',
  carbonada: true,
  azucar: 40,
};

//Creando trupa

type Tomar = [string, boolean, number];

const pespsi: Tomar = ['cafe', true, 40]; //Para crear una trupa tenemos que añadir una anotacion y los valores no pueden cambiar de posicion

const coca: Tomar = ['negra', true, 100];
