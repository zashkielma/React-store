import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Cards';
import Modal from "./components/Modal"


function App() {

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState()

  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data.products)
        console.log(products)

      })
      .catch((err) => console.log(err));

  }, []);



  return (
    <div className="App">



  {selectedProduct && (
  <div>
<Modal 
selectedProduct={selectedProduct} 
setSelectedProduct={setSelectedProduct}
/>
  </div>
  )}

      {products?.map((product) => (

        <Card
          product={product}
          key={product.id}
          setSelectedProduct={setSelectedProduct}
        />
      ))}




    </div>
  );
}

export default App;
