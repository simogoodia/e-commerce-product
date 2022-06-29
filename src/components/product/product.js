/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./product.css";

function Product(props) {
    const [idxImg, setIdxImg] = useState(1);
    useEffect(() => {
        const minus = document.querySelector(".items .minus img");
        if(props.numProduct <= 0)
            minus.classList.add("active");
        else
            minus.classList.remove("active");

    }, [props.numProduct]);
    const addMainImg = (e) => {
        const mainImg = document.querySelector(".main-img img");
        mainImg.src = e.currentTarget.src.replace("-thumbnail", "");
    }
    const prevImg = () => {
        const productImgs = document.querySelectorAll(".product-image .thumbnails img"),
            mainImgProduct = document.querySelector(".product-image .main-img img");
        mainImgProduct.src = productImgs[idxImg].src.replace("-thumbnail", "");
        setIdxImg(idxImg - 1);
        if(idxImg <= 1)
            setIdxImg(productImgs.length-1);
    }
    const nextImg = () => {
        const productImgs = document.querySelectorAll(".product-image .thumbnails img"),
            mainImgProduct = document.querySelector(".product-image .main-img img");
        mainImgProduct.src = productImgs[idxImg].src.replace("-thumbnail", "");
        setIdxImg(idxImg + 1);
        if(idxImg >= productImgs.length-1)
            setIdxImg(1);
    }

    return (
        <>
            <div className="container">
                <div className="product-page">
                    <div className="product-image">
                        <div className="main-img">
                            <img src="../images/image-product-1.jpg" />
                            <div className="arrows">
                                <div className="arrow" onClick={prevImg}>
                                    <img src="../images/icon-previous.svg" />
                                </div>
                                <div className="arrow" onClick={nextImg}>
                                    <img src="../images/icon-next.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="thumbnails">
                            <img src="../images/image-product-1-thumbnail.jpg" onClick={addMainImg} />
                            <img src="../images/image-product-2-thumbnail.jpg" onClick={addMainImg} />
                            <img src="../images/image-product-3-thumbnail.jpg" onClick={addMainImg} />
                            <img src="../images/image-product-4-thumbnail.jpg" onClick={addMainImg} />
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
                                    <div className="minus">
                                        <img src="../images/icon-minus.svg" onClick={props.decreaseProduct} />
                                    </div>
                                    <span className="item">{props.numProduct}</span>
                                    <div className="plus">
                                        <img src="../images/icon-plus.svg" onClick={props.increaseProduct} />
                                    </div>
                                </div>
                            <button className="add-card" onClick={props.addToCardBtn}>
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