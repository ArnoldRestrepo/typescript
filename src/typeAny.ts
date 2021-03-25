// Tipo Explicito
let idUser: any;
idUser = 1;
console.log(idUser);
idUser = '3';
console.log(idUser);

// Tipo inferido
let otherId;
otherId = 2;
otherId = '3';

let surprise: any = 'Hello';

const res = surprise.substring(6);
console.log('res', res);
