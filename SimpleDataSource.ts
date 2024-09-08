import { Product } from "./Product";
export class SimpleDataSource {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Samsung S5","Telefon",24444),
            new Product(2,"Samsung S20 Ultra","Telefon",44444),
            new Product(3,"Iphone mega ultra omega","Telefon",644444),
        );
    }
    getProducts(): Product[]{
        return this.products;


    }
}