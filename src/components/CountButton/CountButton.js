import React, {useState} from 'react'
import './CountButton.css'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(5)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy) 
    }

    
    const buttonStyle ={
        background: props.buttonColor
    }

    return (
        <div>
            <button style = {buttonStyle} onClick = {handleClick}>+{props.incrementBy}</button>
            <div className="numberDisplay">{currentCount}</div>
        </div>
    )
}

export default CountButton;