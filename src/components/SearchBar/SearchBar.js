import React, {useState, useEffect} from 'react'
import './SearchBar.css'



const SearchBar = (props) => {


    const [searchValue, setInput] = useState("")

    console.log(searchValue);

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleClearClick = () => {
        setInput("")
    }

    useEffect(() => {
        console.log("Component Mounts")
    }, [])

    const shouldDisplayResults = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
            if(product.toLowerCase().includes(searchValue.toLowerCase())){
                return product;
            }
        })
    


    return (
        <div className='search-bar-wrapper'>
            <div className="input-wrapper">
                <div className='search-icon'>
                    <i className="fas fa-search" onClick= {handleClearClick} ></i>
                </div>

                <input className='search-input'
                    type="text" 
                    placeholder="Search"
                    onChange={handleInputChange} 
                />

                <div className='clear-icon'>
                    <i className="fas fa-times" onClick= {handleClearClick} ></i>
                </div>
            </div>

            <ul className='output-wrapper'>
                {filteredProducts.map((product) => {
                    return <li className= 'search-result' key={product}>
                        {product}
                    </li>
                })}
            </ul>

        </div>
    )
}

export default SearchBar