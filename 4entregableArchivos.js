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
                let product= {
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                    id: ProductsC.lastId
                }
                this.products.push(product)
                this.saveFile();
            }
            else{
                
                for(let product of this.products){
                    
                    
                    if(product.code === code){
                        console.log("codigo repetido, no se puede agregar")
                        break
                        
                       
                    }else{
                        
                       
                        ProductsC.lastId++;
                        let product1= {
                            title,
                            description,
                            price,
                            thumbnail,
                            code,
                            stock,
                            id: ProductsC.lastId
                        }       
                        this.products.push(product1);
                        this.saveFile();
                        break;
                    }
                    
                }

                
            }
        }
        
        
    }
    showProducts(){
        console.log(this.products)
    }

    async getProducts(){

        try{
        
        const data = await fs.readFile(productos_archivo, "utf-8")
        
            console.log("get products en proceso")
       
            return JSON.parse(data);
     
        
        
        
        }
        
        catch(error){
        
        console.log(`${Error}, no se pudieron encontrar los productos.`);
        
        }
        
        }

    async getProductById(id){
        try{
            const data= await this.getProducts(); 
            console.log("get products by id en proceso")
            let findProduct=false;
            for (let product of data){
                
                if(product.id==id){
                    console.log(product)
                    findProduct=true;
                    return(product)
                }
            }
            if (findProduct==false){
                console.log("producto no encontrado")
                return("producto no encontrado")
            }
        }

        catch(error){
            console.log(`${error}, error catch get products id`)
        }
        

    }

    async deleteProduct(id){
        
            try{
                const data= await this.getProducts(); 
                console.log("get products by id en proceso")
                let findProduct=false;
                for (let product in data){
                    
                    if(data[product].id==id){
                        data.splice(product,1)
                        
                        this.products=data;
                        console.log(this.products)
                        this.saveFile ()
                        findProduct=true;
                        return(product)
                    }
                }
                if (findProduct==false){
                    console.log("producto no encontrado")
                    return("producto no encontrado")
                }
            }
    
            catch(error){
                console.log(`${error}, error catch get products id`)
            }
            
    
        
    }

    async updateProduct(id,title, description,price,thumbnail,code,stock){
        
        try{
            const data= await this.getProducts(); 
            let findProduct=false;
            for (let product in data){
                
                if(data[product].id==id){
                    data[product].title= title;
                    data[product].description= description;
                    data[product].price= price;
                    data[product].thumbnail= thumbnail;
                    data[product].code= code;
                    data[product].stock= stock;
                    
                    this.products=data;
                    this.saveFile ()
                    findProduct=true;
                    console.log("Producto Actualizado")
                }
            }
            if (findProduct==false){
                console.log("producto no encontrado")
                return("producto no encontrado")
            }
        }

        catch(error){
            console.log(`${error}, error catch get products id`)
        }
        

    
}

    

    saveFile (){
        const myproducts= JSON.stringify(this.products)
        fs.writeFile(productos_archivo, myproducts)
        .then(()=>{
            console.log("Productos guardado con exito")
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
product1.addProducts("Huevo", "un huevo rico", "700","https:/1","ab",10);
product1.addProducts("leche", "colanta", "1000","https:/2","at",15);
product1.addProducts("carne", "colanta", "1000","https:/2","ac",15);
product1.addProducts("pezcado", "colanta", "1000","https:/2","ab",15);
product1.addProducts("pezcado", "colanta", "1000","https:/2","ar",15);


product1.deleteProduct(3)
product1.showProducts();