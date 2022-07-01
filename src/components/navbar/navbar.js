/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./navbar.css";


function Navbar(props) {
    useEffect(() => {
        const sale = document.querySelector(".card-profile .card .sale");
        if(props.numProduct <= 1) {
            sale.classList.remove("show");
        }
        if(props.numProduct <= 0)
            props.setNumProduct(1);
    }, [props.numProduct]);
    const showAddToCard = () => {
        document.querySelector(".card").classList.toggle("show");
    }
    const showMenu = () => {
        document.querySelector(".overlay").classList.toggle("show");
        document.querySelector(".navbar .nav").classList.toggle("show");
    }
    const hiddenMenu = () => {
        document.querySelector(".overlay").classList.remove("show");
        document.querySelector(".navbar .nav").classList.remove("show");
    }
    const removeProduct = () => {
        props.setNumProduct(props.numProduct - 1);
    }

    return (
        <div>
            <div className="overlay"></div>
            <div className="container">
                <div className="navbar">
                    <div className="brand-nav">
                        <div className="bar">
                            <img src="./images/icon-menu.svg" onClick={showMenu} />
                        </div>
                        <div className="brand">
                            <img src="./images/logo.svg" />
                        </div>
                        <div className="nav">
                            <ul>
                                <div className="close" onClick={hiddenMenu}>
                                    <img src="./images/icon-close.svg" />
                                </div>
                                <div className="navbar-nav">
                                    <li>
                                    <a href="#Collections">Collections</a>
                                    </li>
                                    <li>
                                        <a href="#men">Men</a>
                                    </li>
                                    <li>
                                        <a href="#women">Women</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#Contact">Contact</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="card-profile">
                        <div className="card" onClick={showAddToCard}>
                            <div className="sale">{props.numProduct}</div>
                            <img src="./images/icon-cart.svg" />
                            <div className="add-to-card hidden" onClick={(e) => {e.stopPropagation()}}>
                                <h4>Card</h4>
                                <div className="items">
                                    <div className="item">
                                        <div className="product">
                                            <img src="./images/image-product-1-thumbnail.jpg" />
                                        </div>
                                        <div className="info">
                                            <p>Fall Limited Edition Sneakers</p>
                                            <p>$125.00 x {props.numProduct} <b>${125 * props.numProduct}</b></p>
                                        </div>
                                        <div className="delete" onClick={removeProduct}>
                                            <img src="./images/icon-delete.svg"  />
                                        </div>
                                    </div>
                                    <div className="btn">
                                        <button>Checkout</button>
                                    </div>
                                </div>
                                <div className="empty-msg">Your card is empty.</div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src="./images/image-avatar.png" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Navbar;