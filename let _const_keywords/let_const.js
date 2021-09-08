/* var is global object property.

var a=10;
console.log(window.a);

//Output: 10  */
//----------------------------------------

/* let is not global objet.

let a=10;
console.log(window.a);

//Output: undefined */
//----------------------------------------

/* In var, redeclaration is allowed.

var a=10;
var a=20;
console.log(a);

//Output: 20  */
//----------------------------------------

/* In let, redeclaration is not allowed.

let a=10;
let a=20;
console.log(a);

//Output: Error */
//----------------------------------------

/* In const, we can not modify the value.

const a=10;
a=5;
console.log(a);

//Output: Error */
//----------------------------------------

/* In const, redeclaration is not allowed.

const a=10;
const a=5;
console.log(a);

//Output: Error */
//----------------------------------------