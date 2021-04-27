// [1, "User"]
let user2: [number, string];
user2 = [1, 'Hello'];

// Tuplas con varios valores
// id, userName, isPro
let userInfo2: [number, string, boolean];
userInfo2 = [2, 'papparazzi', true];

// Arreglo de Tuplas
let tupleArray: [number, string][] = [];
tupleArray.push([1, 'Example1']);
tupleArray.push([2, 'LeensQueen']);
tupleArray.push([3, 'Example3']);
console.table(tupleArray);

// Uso de Funciones Array
tupleArray[1][1] = tupleArray[1][1].concat('001');
console.table(tupleArray);
