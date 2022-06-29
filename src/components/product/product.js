/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import "./product.css";

function Product() {
    return (
        <>
            <div className="container">
                <div className="product-page">
                    <div className="product-image">
                        <div className="main-img">
                            <img src="../images/image-product-1.jpg" />
                            <div className="arrows">
                                <div className="left arrow">
                                    <img src="../images/icon-previous.svg" />
                                </div>
                                <div className="right arrow">
                                    <img src="../images/icon-next.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="thumbnails">
                            <img src="../images/image-product-1-thumbnail.jpg" />
                            <img src="../images/image-product-2-thumbnail.jpg" />
                            <img src="../images/image-product-3-thumbnail.jpg" />
                            <img src="../images/image-product-4-thumbnail.jpg" />
                        </div>
                    </div>
                    <div className="product-details">
                        <h4>SNEAKER COMPANY</h4>
                        <h2>Fall Limited Editions <br />Sneakers</h2>
                        <p className="desc">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withtand everything can offer.</p>
                        <div className="price">
                            <b>$125.00</b>
                            <span>50%</span>
                        </div>
                        <p className="through">$250.00</p>
                        <div className="items-add-card">
                            <div className="items">
                                    <di className="minus">
                                        <img src="../images/icon-minus.svg" />
                                    </di>
                                    <span className="item">0</span>
                                    <div className="plus">
                                        <img src="../images/icon-plus.svg" />
                                    </div>
                                </div>
                            <button className="add-card">
                                {/* <img src="../images/icon-cart.svg" /> */}
                                Add to card
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Product;