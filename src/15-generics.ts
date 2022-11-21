// EJEMPLO

// el myType hacemos referencia al tipo de dato que queremos recibir como parametro
function getValue<T>(value: T) {
  return value;
}
// aplicamos la logica
getValue<number>(12);
getValue<string>('asd');
getValue<number[]>([1,2,3,4]);
