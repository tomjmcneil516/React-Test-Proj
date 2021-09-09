import React, { useEffect, useState } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'


const products = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "dental floss",
  "mouth guard"
]




const App = () => {

  const [productState, setProductState] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(productsArray=>{
              const newProductState = productsArray.map((product) => {
                return product.title
              })
              setProductState(newProductState)
            })
  }, [])

  const hasProducts = productState.length > 0

  
  return (
    <div className="App">
      {hasProducts ? <SearchBar products={productState}/> : "LOADING..."}


    </div>
  );
}

export default App;
