# Basic Course of TypeScript

## Tipado en TypeScript

### Explícito:

Define una sintaxis para la creación de variables con tipo de dato.

### Definición Post Fija:

`variableName : dataType`

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

### Tipo: Boolean

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

### Tipo: Undefined y Null

- En TypeScript, ambos "valores" tienen sus respectivos tipos:
  - Null
  - Undefined

#### Tipo: Undefined y Null (Subtipos)

- `Null y Undefined` se pueden asumir como subtipos de los otros tipos de datos
- Significa que se puede signar `null` y `undefined` a una variable de tipo `string`, por ejemplo.
- La opción `--strictNullChecks` nos permite asignar `null` o `undefined` a una variable de tipo `any` o sus respectivos tipos -`--strictNullChecks` Ayuda a evitar errores comunes en programación de apps en el ámbito de JavaScript.

```Bash
  $tsc --watch src/main.ts --strictNullChecks
```

```JSON
// Archivo de Configuración tsonfig.json

"strict": true
"strict": false

"strictNullChecks": true
"strictNullChecks": false
```

### Tipo: Object

- `object` es el tipo de dato que representa un valor no primitivo
- Es el tipo para cualquier variable que no sea number, string, boolean, null, undefined, etc

#### Object vs object

- `Object`: instancia de la clase Object de la clase de JavaScript
- `object`: Tipo para valores no primitivos. Con este tipo no se puede acceder a las propiedades de un objeto

### Tipo: Array

- Al igual que JavaScript, TypeScript permite definir un arreglo para contener un conjunto de valores.
- Usa dos notaciones: `[]` y `Array<tipo>`

### Tipo: Tupla

- Una tupla en TypeScript es un array de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.
- Las tuplas permiten expresar un arreglo con un número fijo de elementos
- Los tipos de datos son conocidos

### Tipo: Enum

- Los enumerados permiten definir un conjunto de constantes con nombre
- Tienen la ventaja de adaptarse al contexto de la aplicación

### Unión de Tipos, Alias y Tipos Literales

- En TypeScript se puede definir una variable con múltiples tipos de datos: Union Type
- Se usa el símbolo de _pipe_ `("|")` entre los tipos

#### Alias de Tipos

- TypeScript permite crear alias como nuevo nombre para un tipo
- El alias de puede aplicar también a un conjunto o combinación de tipos
- Se usa la palabra reservada `type`

#### Literal Types

- Una variable con un tipo literal puede contener únicamente una cadena del conjunto.
- Se usan cadenas como "tipos" combinados con el símbolo de pipe '|' entre ellos

### Type Assertions

- Cuando un programados puede conocer más que TypeScript sobre el valor de una variable
- Es un mensaje al compilador: "Confía en mí, se lo que hago"
- Se parece al casting de tipos en otros lenguaje de programación
- Usa dos sintaxis: `<Angle Bracket>` y `(variable as type)`

### Functions in TypeScript
- Los parámetros en las funciones son tipados
- Se pueden definir parámetros opcionales
- El tipo de retorno puede ser un tipo básico,enum, alias, tipo literal o una combinación de ellos.


### Interface in Typescript
- Las interfaces constituyen un "contrato" tanto para el proyecto como de forma externa.

### Interfaces Propiedades Opcionales
- No todas las propiedades de una interfaz podrían ser requeridas
- Establecemos una propiedad como opcional con el símbolo (?), después del nombre

### Interfaces de Solo Lectura
- Algunas Propiedades de la interfaz podrían no ser modificables una vez creado el objeto
- Esto es posible usando readonly antes del nombre de la propiedad

### Extendiendo Interfaces
- Las interfaces pueden extenderse unas de otras
- Esto permite copiar los miembros ya definidos de una interfaz a otra, ganando flexibilidad y reusabilidad de componentes

### Clases y Constructores
- A partir de **ECMAScript 2015** es posible construir clases y hacer uso de POO en JavaScript
- TypeScript permite aplicar técnicas sin tener que esperar por otra versión

### Clases Públicas
- TypeScript define un modificados de acceso público por defecto para los miembros de clase
- Es posible marcar un miembro como público usando la plabra reservada `public`

### Clases Privadas
- TypeScript define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada `private`

### Miembros Privados ECMAScript
-TypeScript también soporta (a partir de la *versión 3.9*) la nueva sintaxis JavaScript para miembros privados: `#atributo`
- Esta característica puede ofrecer mejores garantías de aislamiento en miembros privados

# Clases Métodos Set y Get
- TypeScript soporta los métodos de accesores `get` y `set` como una forma de interceptar los accesos a los miembros privados de un objeto

# Herencia de Clases y Miembros Protegidos
- TypeScript soporta este patrón común en el mundo de la POO
- Implementa la habilidad de extender código de clases existentesa través de la *herencia*

# Clases Abstractas
- Las clases Abstractas son la base de donde otras clases pueden derivarse
- A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias
- La palabra reservada es: `abtract`

# Propiedades Estáticas y Propiedades de Solo Lectura
- Las clases por lo general definen atributos y métodos aplicables a las instancias de las mismas
- A través de la palabra reservada `static` se puede definir un miembro visible a nivel de la clase
- Al igual que las interfaces, podemos usal la palabra reservada `readonly` para marcar el miembro de una clase como solo lectura