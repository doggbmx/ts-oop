class myMath {
  // de esta manera no es necesario instanciar la clase en una variable, solo accedemos como una propiedad de la clase
  static PI = 3.14;
  // tambien se puede hacer con los metodos
  static max(...numbers:number[]) {
    return numbers.reduce((max,item) => max >= item ? max:item);
  }
}
// ej
console.log(myMath.PI);
console.log(myMath.max(1,2,3,4,8)); // 8
// que pasas si le envio un array como parametro? uso el spread operator
const numeros: number[] = [1,2,3,4,9];
console.log(myMath.max(...numeros));// 9
