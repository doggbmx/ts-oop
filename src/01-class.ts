const date = new Date();
date.getHours();

const date2 = new Date(1994, 1, 12); // 0 es enero, 11 dic
date.getDay();

console.log(date);
console.log(date2);

let myVar;

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day:number) {
    this.year = year,
    this.month = month,
    this.day = day
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
