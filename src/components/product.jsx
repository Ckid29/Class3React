import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {

    return (<div className='product'>
            <img src={'/img/'+props.data.image}></img>
            <h2>{props.data.title}</h2>
            <label>Price: ${props.data.price}</label>
            <label>$Total</label>
            <QuantityPicker></QuantityPicker>
            <button>Add</button>
            </div>);
};

export default Product;