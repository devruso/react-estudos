import { Product } from "../Product/Product";
import imageMusic1 from '../../assets/images/1.png';
import imageMusic2 from '../../assets/images/2.png';
import imageMusic3 from '../../assets/images/3.png';
import './ProductList.css'

export function ProductList(){
    
    return (
        <div className="productList">
        <Product route={imageMusic1} title= "Um produto top!" price="R$100" ></Product>
        <Product route={imageMusic2} title= "Um produto top!" price="R$100" ></Product>
        <Product route={imageMusic3} title= "Um produto top!" price="R$100" ></Product>
        </div>
    )
}