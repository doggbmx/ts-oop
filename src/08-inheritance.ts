export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('me muevo');
  }

  saludo() {
    return `alo soy un pelotudo y me llamo ${this.name}`
  }
}

const animal1 = new Animal('fifi');
animal1.move();
console.log(animal1.saludo());

// HERENCIA

export class Perro extends Animal {
  constructor(name:string ,public owner:string) {
    super(name);
    //con el super llamamos al constructor del padre
  }

  woof(times:number) {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const dog = new Perro('gigi', 'manu');
dog.move();
console.log(dog.saludo());
dog.woof(5);
console.log(dog.owner);
