import React from 'react'

const Button = () => {



    const handleClick = () => {
        document.body.style.backgroundColor = 'green'
    }

    return(
        <button onClick={handleClick}>change color</button>
    )

}

export default Button
