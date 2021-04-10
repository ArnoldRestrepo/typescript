/** NULL */

// Explicita
let nullVariable: null;
//nullVariable = 2;
// Error

let otherVariable = null;
otherVariable = '1';

/** UNDEFINED */

let undefinedVariable: undefined = undefined;
// undefinedVariable = 'Hello';

/*
 * tsc --watch src/type-null-undefined.ts --strictNullChecks
 * Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
 * Archivo tsconfig.json "strictNullChecks": true
 */

let albumName: string;
// albumName = null;
// albumName = undefined;
