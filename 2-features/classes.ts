///Super Clase
// class Vehicle {
//   manejar(): void {
//     console.log('CHu chu');
//   }

//   clason(): void {
//     console.log('pi pi pi');
//   }
// }

/**
 * Herencia la herencia puede extender una clase que nosotros queramos por ejemplo en la clase de abajo de ejemplo
 * 
 * 
 *    Tenemos la clase car pero queremos que tambien tenga las habilidades de un vehiculo por ejemplo manera y tocar el clason para hacerlo tenemos que extender el carro hacia el vehiculo.
 *    class Car extend Vehicle {
 *        
 * ///////Aqui esta manejar() y clason()
      }
 * 
 * 
 * 
 */

//AQUI Estamos diciendo a type que por medio de la palabra clave extend esta copiando todo los metodos que exista en la clase Vechicle y la ponga en la clase car realmente no copia pero es un ejemplo
//para que entienda xx

//Vehicle es una super clase y car es una clase hijo de vehicle

//Clase Child
// class Car extends Vehicle {
//   manejar() : void {
//     console.log('pum');
//   }

// }

// const car = new Car();
// car.clason();
// car.manejar();

//Los modificadores son los siguientes
/// Public: Este metodo puede ser llamado en cualquier lugar y tiempo => esta es de manera default
/// Private: Este metodo solo puede ser llamado por otros metodo en la misma clase
//Protect este metodo solo puede ser llamado por otros metodo de la clase o por otros metodos child de la clases

class Vehicle {
  // public manejar(): void {
  //   console.log('CHu chu');
  // }

  constructor(public color: string){

  }


  protected clason(): void {
    console.log('pi pi pi');
  }
}

// const tsuru = new Vehicle('azul');
// console.log(tsuru.color);

class Car extends Vehicle {

  constructor(public llantas: number, color: string) {
    super(color);
  }

  private manejar(): void {
    console.log('pum');
  }

  empezarAmanejar(): void {
    this.manejar();
    this.clason();
    
  }
}

const car = new Car(10,'rosado');

car.empezarAmanejar();
