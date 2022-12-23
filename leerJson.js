const fs =require("fs");
const { stringify } = require("querystring");

console.log(fs.readFileSync("miAuto.json","utf-8"))
console.log(typeof(fs.readFileSync("miAuto.json","utf-8")))

const miAutomovil= fs.readFileSync("miAuto.json","utf-8");
const CarroObjeto=JSON.parse(miAutomovil);// me lo pasa a objeto
CarroObjeto.anio=2022;
console.log(CarroObjeto)/// no se puede guardar en un archivo objeto por lo tanto toca pasarlo a string

const textoAuto= JSON.stringify(CarroObjeto)
console.log(textoAuto)