import { Product } from '../../hooks/useProducts';
import { cutLongText } from '../ProductLine'
// import defaultImg from '../../assets/images/default.png'
import './styles.scss';

export function ProductCard(props: Product) {
    return (
        <div className="product-card">
            <div className="product-image">
                {/* <img src={defaultImg} alt="Foto do produto" /> */}
                <img src={props.picture} alt="Foto do produto" />
            </div>
            
            <span className="product-rating">
                <div style={{backgroundColor: props.rating >= 3 ? 'var(--yellow-500)' : 'var(--light-300)'}}>
                    {props.rating === 5 ? '5' : props.rating.toFixed(2)}
                    <i className="far fa-star"></i>
                </div>
            </span>

            <span className="product-price text-center">
                <span className="price">${props.price.toFixed(2)}</span>
                <span className="shipping text-center" style={{color: props.shipping === 0 ? 'var(--green-500)' : 'var(--dark-900)'}}>
                    <i className="fas fa-shopping-cart"></i>
                    {props.shipping === 0 ? 'Free Shipping' : ('$' + props.shipping.toFixed(2))}
                </span>
            </span>
            
            <div className="product-details">
                <h3 className="product-name">{props.name}</h3>
                <p className="product-store">By {props.store}</p>
                <p className="product-description">{cutLongText(props.description + props.description)}</p>
            </div>
            
            <button className="add-to-wishlist">
                {props.wishlist ? (<i className="fas fa-heart"></i>) : (<i className="far fa-heart"></i>)}
                WISHLIST
            </button>
            <button className="add-to-cart">
                <i className="fas fa-shopping-bag"></i>
                ADD TO CART
            </button>
        </div>
    );
}
