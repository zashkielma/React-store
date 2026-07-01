import react from "react"
import "../stylesheets/Cards.css"




function Card({product, setSelectedProduct }){


    return(

<div className="card" onClick={()=>setSelectedProduct(product)}>

<img src={product?.thumbnail}  />

<h3> <i>{product?.title}</i> </h3>

<h5><i> {product?.brand} </i></h5>

<h4><i> $ {product?.price} </i></h4>


</div>

    )
}

export default Card;