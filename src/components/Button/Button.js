import React from 'react'

const Button = (props) => {
    return (
        <div style = {{color: "blue", background: "green", borderRadius: "5px"}}>
            {props.buttonText}
        </div>
    )
}

export default Button

