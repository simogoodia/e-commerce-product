import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product/product";


function App() {
  const [numProduct, setNumProduct] = useState(1);
  useEffect(() => {
    const addToCard = document.querySelector(".card-profile .card .add-to-card");
    const card = document.querySelector(".card-profile .card");
    if(numProduct < 1) {
      addToCard.classList.remove("show");
      addToCard.classList.add("hidden");
      card.classList.remove("show");
    } else {
      addToCard.classList.remove("hidden");
      addToCard.classList.add("show");
    }
  }, [numProduct]);
  const increaseProduct = () => {
    setNumProduct(numProduct + 1);
    document.querySelector(".card-profile .card .sale").classList.add("show");
  }
  const decreaseProduct = () => {
    setNumProduct(numProduct - 1);
  }
  const addToCardBtn = () => {
    const card = document.querySelector(".card-profile .card");
    if(numProduct <= 0) {
      return 0;
    }
    card.classList.add("show");
  }

  return (
    <div>
      <Navbar numProduct={numProduct}
              setNumProduct={setNumProduct} />
      <Product increaseProduct={increaseProduct}
              decreaseProduct={decreaseProduct} 
              numProduct={numProduct} 
              setNumProduct={setNumProduct}
              addToCardBtn={addToCardBtn} />
    </div>
  );
}

export default App;
