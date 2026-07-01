import react from "react";
import "../stylesheets/Modal.css"


function Modal({ selectedProduct, setSelectedProduct }) {

    return (
   

        <div className="modal">

<img src={selectedProduct?.thumbnail} className="img"/>

<div className="container-info">

    <button className="close" onClick={()=>{setSelectedProduct(null)}}>X</button>

<h1>{selectedProduct?.title}</h1>

<h3>{selectedProduct?.brand} • {selectedProduct?.category}</h3>

<h3>⭐ {selectedProduct?.rating}</h3>

<h2>${selectedProduct?.price}</h2>

<h3>{selectedProduct?.discountPercentage}% OFF</h3>

<p>{selectedProduct?.description}</p>

<h4>📦 Stock: {selectedProduct?.stock}</h4>

<h4>⚖️ Weight: {selectedProduct?.weight} g</h4>


<button className="buy">Buy</button>
</div>
        </div>
          
    )
}


export default Modal;