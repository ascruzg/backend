const fs=require("fs/promises");

const productos_archivo="productos.txt"
class ProductsC{
    products;
    static lastId=0;
    constructor (products){
       products?this.products=products:this.products=[];

    }

    addProducts(title, description,price,thumbnail,code,stock){

        if(!!!title || !!!description || !!!price || !!!thumbnail || !!!code || !!!stock ) {
            throw new Error ("Falta un parametro por agregar")}
        else{
            if(this.products.length==0){
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
                this.products.push(product)
                this.saveFile ();
            }
            else{
             
                for(let product of this.products){
                    if(product.code ==code){
                        console.log("codigo repetido, no se puede agregar")
                    }
                    else{
                        console.log("codigo sin repetir")
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
                        this.pushFile(product)
                    }
                    
                }

                
            }
        }
        
        
    }

    async getProducts(){
        console.log("se ingreso al getproducts")
        const data = await fs.readFile(productos_archivo, "utf-8");
        return data
        
    }

    getProductById(id){ 
        for (let product of this.products){
            if(product.id==id){
                return product;
            }
            else{
                return "producto no encontrado";
            }
        }

    }

    saveFile (title, description,price,thumbnail,code,stock){
        const myproducts= JSON.stringify(this.products)
        console.log(myproducts)
        fs.writeFile(productos_archivo, myproducts)
        .then(()=>{
            console.log("Productos guardados con exito")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    async pushFile(product){
        
        await fs.appendFile(productos_archivo,JSON.stringify(product));
        console.log("Se agrego el nuevo producto al archivo")

    }
    
    

}

const product1= new ProductsC ();
product1.addProducts("Huevo", "un huevo rico", 700,"https:/1","ab",10);


let id= product1.getProductById();
console.log(id)
product1.addProducts("leche", "colanta", 1000,"https:/2","ac",15);

let allData= product1.getProducts()
console.log (allData)