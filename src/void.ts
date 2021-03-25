// Void

const user: object = { id: 1, name: 'Ernesto', lastName: 'Valverde' };

// Tipo Explicito
function showInfo(user: any): any {
  console.log('User Info', user.id, user.name, user.lastName);
  // return 'Hola';
}

showInfo(user);

// Tipo Inferido
function showFormattedInfo(user: any) {
  console.info(
    'User Info',
    `
      id: ${user.id},
      name: ${user.name}
      name: ${user.lastName}
    `
  );
}

showFormattedInfo(user);

// Tipo void, como tipo de dato en una variable
let unusable: void;
unusable = undefined;

// Tipo: Never
function handleError(code: number, message: string): never {
  // Process your code here
  // Generate the message
  throw new Error(`${message}. Code ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch (error) {}

function addNumbers(limit: number): never {
  let sum: number = 0;
  while (true) {
    sum++;
  }
  // Never return sum
}

addNumbers(10);
// ciclo Infinito
