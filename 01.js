const miJson = require('./json/01.json');
console.log(miJson.nombre);
//console.log(miJson.objeto);
//console.log(miJson.objeto.saludo);
let objprueba = miJson;
console.log(objprueba);
const miObjeto = JSON.parse(objprueba);
//console.log(miObjeto.saludo);
