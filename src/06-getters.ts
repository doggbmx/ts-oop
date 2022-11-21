export class MyDate {
  // de esta forma podemos construir la clase en el constructor, pero es necesario aclarar su acceso (priv o publi)
    constructor(
      public year: number = 1993,
      public month: number = 7,
      private _day:number = 6,
      ) {}

    printFormat():string {
      const day = this.addPadding(this._day);
      const month = this.addPadding(this.month);
      return `${day}/${month}/${this.year}`;
    }

    private addPadding(value:number):string {
      if (value < 10) {
        return `0${value}`
      }
      return `${value}`
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
      if (type === 'days') {
        this._day += amount;
      } else if (type === 'months') {
        this.month += amount;
      } else if (type === 'years') {
        this.year += amount;
      }
    }
    // todos los getters por definicion deberian retornar algo
    get day() {
      return this._day;
    }

    get isLeapYear(): boolean {
      // de esta manera se comporta como una propiedad de la clase y no como un metodo
      if (this.year % 400 === 0) return true;
      if (this.year % 100 === 0) return false
      return this.year % 4 ===0;
    }
  }


const myDate = new MyDate(1994,7,6);
console.log(myDate.printFormat());
// myDate.day = 12; al hacer privado la propiedad no se puede acceder ni modificar
console.log(myDate.isLeapYear); // ejemplo del get
const myDate2 = new MyDate(2000,7,6);
console.log(myDate2.isLeapYear);
