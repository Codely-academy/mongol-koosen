import React, { useState } from 'react'

const Box = ({ text, color = 'lightgray' }) => {
    const [toggle, setToggle] = useState(false);

    const onClick = () => {
        setToggle(!toggle)
    }
    return (
        <button onClick={onClick} className='box'
            style={{ backgroundColor: toggle ? 'green' : color }}>
            <h1>{text}  </h1>
        </button>
    )
}

export default Box