import { Animal, Perro } from './09-protected';
// al colocar abstract a Animal, no puedo mas crear instancias de la clase, solo puedo extenderla o implementarla a otras clases.

// const animal = new Animal('bobo');
// animal.saludo();

const perro = new Perro('tonto', 'yo');
perro.woof(1);
