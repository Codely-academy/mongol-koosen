import React, { useState } from 'react'
import InfoBox from './InfoBox'
import './style.css'
const ClickGame = () => {
    const [timer, setTimer] = useState(0)
    const [click, setClick] = useState(0)
    const startTimer = () => {
        // Start timer 
        setInterval(() => {
            setTimer((prevTimer) => {
                const nextTime = prevTimer + 10
                return nextTime
            })
        }, 10);
    }

    const onClick = () => {
        if (timer === 0) {
            startTimer()
        }
        setClick(prev => prev + 1)
    }

    const formattedTime = timer / 1000

    const clickPerS = click > 0 ? (click / formattedTime).toFixed(2) : 0
    return (
        <div className='container'>
            <div className="game">
                <div className="row">
                    <InfoBox label='Timer' value={formattedTime} color="blue" />
                    <InfoBox label='Click/s' value={clickPerS} color="orange" />
                    <InfoBox label='Score' value={click} color="green" />
                </div>
                <button className='button' onClick={onClick}>
                    <h1>Click here</h1>
                </button>
            </div>
        </div>
    )
}

export default ClickGame