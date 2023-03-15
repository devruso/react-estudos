import './Product.css';

export function Product(props){
    
    return (
        <div className='product'>
        <img className='productImg' src={props.route} alt='produto'></img>
        <h3 className='title'>{props.title}</h3>
        <span className='price'>{props.price}</span>
        </div>
    )
}