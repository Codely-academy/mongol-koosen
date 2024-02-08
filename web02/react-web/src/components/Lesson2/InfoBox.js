import React from 'react'
import './style.css'
const InfoBox = ({ color, label, value }) => {
    return (
        <div className={`info-box`} style={{
            backgroundColor: color
        }}  >
            <h1>{value}</h1>
            <p>{label}</p>
        </div>
    )
}

export default InfoBox