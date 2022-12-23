const fs = require("fs");

const nombre_archivo ="mejores_alumnos-callback.txt"

const mejoresAlumnos=
`Andrey Cruz
camilogonzales`;

const otrosAlumnos=`
Aleja`;


fs.writeFile(nombre_archivo,mejoresAlumnos, (err)=> {
    // este ya no tiene la palabra reserveda sync que es sincrono por lo que es asincrono y necesita como tercer parametro un callback
    if(err) throw new Error(err);   // throw si hay error corta la ejecucion   
    console.log("Archivo guardado con exito") // si no hay error hace esto
    fs.appendFile(nombre_archivo, otrosAlumnos, (errorcito)=>{ //aqui esta un callback dentro de un call back se hace hace para que se termine lo asincrono
        if(errorcito) throw new Error(errorcito)
        console.log("ya se agrego Alejandra")
        fs.readFile(nombre_archivo, "utf-8", (err,data)=>{// en esta funcion se hace la lectura del archivo y otro call back
            if(err) throw err;
            console.log(data);
            fs.unlink(nombre_archivo,(err)=>{// se elimina el archivo
                if (err) throw err;
                console.log("archivo eliminado")
            })
        })
    })
});