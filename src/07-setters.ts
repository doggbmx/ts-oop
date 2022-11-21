export class MyDate {
  // de esta forma podemos construir la clase en el constructor, pero es necesario aclarar su acceso (priv o publi)
    constructor(
      public year: number = 1993,
      private _month: number = 7,
      private _day:number = 6,
      ) {}

    printFormat():string {
      const day = this.addPadding(this._day);
      const month = this.addPadding(this._month);
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
        this._month += amount;
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

    get month() {
      return this._month;
    }

    set month(newValue: number) {
      if (newValue >= 1 && newValue <= 12) {
        this._month = newValue;
      } else {
        throw new Error('month out of range');
      }
    }
  }


const myDate = new MyDate(1994,7,6);
console.log(myDate.printFormat());
myDate.month = 4;
console.log(myDate.month);
myDate.month = 77; // va a tirar error
