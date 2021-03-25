# Basic Course of TypeScript

## Tipado en TypeScript

### Explícito:

Define una sintaxis para la creación de variables con tipo de dato.

_Definición Post Fija_

`variableName : dataType`

``

### nomVariable:

Tipo de dato.

### Inferido:

TypeScript tiene la habilidad de "deducir" el tipo en funcion de un valor.

## Tipo de datos en JavaScript

- Number > Boolean > String > Array
- Tuple > Enum > Any > Void
- Null > Undefined > Never > Object

### Tipo: Number

- Valores Numéricos
- Valores Hexadécimales
- Valores Biarios
- Valores Hoctales

### Tipo: Boolean

- El tipo de dato más simple en TypeScript
- Dos únicos valores: true y false

### Tipo: Any

- Usado para capturar valores dinámicos
- Los valores pueden cambar de tipo en el tiempo:
  - APIs Externas
  - Librerias de Terceros

### Tipo: Void

- Es lo opuesto de any: representa la ausencia de tipo.
- Comúnmente se usa como tipo de retorno en funciones

### Tipo: Never

- Representa el tipo de valor que nuna ocurre
  - Funciones que lanzan exepctiones
  - Funciones que nunca retornan un valor
