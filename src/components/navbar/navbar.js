/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import "./navbar.css";


function Navbar() {
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

    return (
        <div>
            <div className="overlay"></div>
            <div className="container">
                <div className="navbar">
                    <div className="brand-nav">
                        <div className="bar">
                            <img src="../images/icon-menu.svg" onClick={showMenu} />
                        </div>
                        <div className="brand">
                            <img src="../images/logo.svg" />
                        </div>
                        <div className="nav">
                            <ul>
                                <div className="close" onClick={hiddenMenu}>
                                    <img src="../images/icon-close.svg" />
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
                            <div className="sale"></div>
                            <img src="../images/icon-cart.svg" />
                            <div className="add-to-card" onClick={(e) => {e.stopPropagation()}}>
                                <h4>Card</h4>
                                {/* <div className="item">
                                    <div className="product">
                                        <img src="../images/image-product-1-thumbnail.jpg" />
                                    </div>
                                    <div className="info">
                                        <p>Fall Limited Edition Sneakers</p>
                                        <p>$125.00 x 3 <b>$375.00</b></p>
                                    </div>
                                    <div className="delete">
                                        <img src="../images/icon-delete.svg"  />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button>Checkout</button>
                                </div> */}
                                <div className="empty-msg">Your card is empty.</div>
                            </div>
                        </div>
                        <div className="profile">
                            <img src="../images/image-avatar.png" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Navbar;