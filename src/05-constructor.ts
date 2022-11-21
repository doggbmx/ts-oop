export class MyDate {
// de esta forma podemos construir la clase en el constructor, pero es necesario aclarar su acceso (priv o publi)
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day:number = 6,
    ) {}

  printFormat():string {
    const day = this.addPadding(this.day);
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
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }

  getDay () {
    return this.day;
  }
}

const myDate = new MyDate(1994,7,6);
console.log(myDate.printFormat());
// myDate.day = 12; al hacer privado la propiedad no se puede acceder ni modificar
