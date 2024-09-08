import { ProductService } from "./ProductService";
import { Product } from "./Product";
let _productService = new ProductService();
let result;
result = _productService.getProducts();
result = _productService.getById(2);
let p = new Product();
p.name = "Iphone 14";
p.price = 12000;
p.category = "telefon";
_productService.deleteProduct(result)
result = _productService.getProducts();
