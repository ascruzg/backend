const fsPromises = require("fs/promises");

const nombre_archivo ="mejores_alumnos-promesas.txt"

const mejoresAlumnos=
`Andrey Cruz
camilogonzales`;

const otrosAlumnos=`
Aleja`;

fsPromises.writeFile(nombre_archivo,mejoresAlumnos)
.then( ()=> {
    
      
    console.log("Archivo guardado con exito") // si no hay error hace esto
    pushAlumnos();

})
.then(()=>{
    fsPromises.unlink(nombre_archivo)
    console.log("Se elimino el archivo")
})
.catch(err=>{
    console.log(err)
})

async function pushAlumnos (){
    await fsPromises.appendFile(nombre_archivo,otrosAlumnos);
    console.log("Alejandra guardada con exito")
    const data = await fsPromises.readFile(nombre_archivo, "utf-8")
    .then(()=>{
        console.log(data);
    })
    
}
    

for (let product of this.products){
    if(product.code==this.code){
       alert("no se puede agregar, codigo repetido")
    }
    else{
        ProductsC.lastId++;
        const product= {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductsC.lastId
        }       
        this.products.push(product);
        //this.saveFile ();
    }
}

