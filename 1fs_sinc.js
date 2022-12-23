const fs =require("fs");

const mejoresAlumnos=
`Andrey Cruz
camilogonzales`;

fs.writeFileSync("mejores_alumnos.txt",mejoresAlumnos)

console.log(fs.existsSync("mejores_alumnos.txt"))// valida si existe el archivo

const otrosAlumnos=`
Aleja`;

fs.appendFileSync("mejores_alumnos.txt", otrosAlumnos);// agrega cosas al txt

console.log(fs.readFileSync("mejores_alumnos.txt", "utf-8"));// si no agrega el utf-8 recibe un buffer

fs.unlinkSync("mejores_alumnos.txt")//me elimina el archivo

console.log(fs.existsSync("mejores_alumnos.txt"))// valida si existe el archivo
