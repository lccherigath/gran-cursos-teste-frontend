import defaultImg from '../../assets/images/default.png'
import './styles.scss';

export function ProductLine() {
    return (
        <div className="product-line">
            <div className="product-image">
                <img src={defaultImg} alt="Foto do produto" />
            </div>
            <div className="product-details">
                <h3 className="product-name">Apple Watch Series 4 GPS</h3>
                <p className="product-store">By Apple</p>
                <p className="product-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="product-buy">
                <span className="product-rating">
                    <div>
                        3.4
                        <i className="far fa-star"></i>
                    </div>
                </span>
                <span className="product-price text-center">
                    <span className="price">$199</span>
                    <span className="shipping text-center">
                        <i className="fas fa-shopping-cart"></i>
                        Free Shipping
                    </span>
                </span>
                <button className="add-to-wishlist">
                    <i className="far fa-heart"></i>
                    {/* <i className="fas fa-heart"></i> */}
                    WISHLIST
                </button>
                <button className="add-to-cart">
                    <i className="fas fa-shopping-bag"></i>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}
