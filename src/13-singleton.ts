// constructor privado, es decir, solo 1 instancia de la clase.
export class MyService {
  static instance: MyService | null = null;

  // si el constructor es privado, solo se puede instanciar dentro de la clase.
  private constructor(public name:string) {}

  getName() {
    return this.name
  }
  // de esta manera con este metodo statico creamos nuestro 'singleton'
  static create(name:string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('service 1');
console.log(myService1.getName()); // service 1
const myService2 = MyService.create('service 2');
console.log(myService2.getName()) // service 1
