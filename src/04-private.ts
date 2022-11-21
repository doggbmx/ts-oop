export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day:number) {
    this.year = year,
    this.month = month,
    this.day = day
  }

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
