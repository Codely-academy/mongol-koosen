import React, { useState } from 'react'
import './style.css'
const TicTac = () => {
    const GAME_STATES = {
        TIED: null,
        PLAYING: undefined,
    }
    const defaultBoxes = ['', '', '', '', '', '', '', '', '']
    const [boxes, setBoxes] = useState(defaultBoxes)
    const [lastClick, setLastClick] = useState('')
    const [winner, setWinner] = useState(GAME_STATES.PLAYING)
    const handleClick = (i) => {
        setBoxes((prevBoxes) => {
            // Өмнөх утга нь утгатай байх юм бол шинэчлэхгүй
            if (prevBoxes[i]) return prevBoxes
            const nextValue = lastClick === 'X' ? 'O' : 'X'

            // Дарсан нүдний утгийг оноож байна 
            prevBoxes[i] = nextValue

            checkWinner(prevBoxes)

            setLastClick(nextValue)
            return [...prevBoxes]
        });


    }
    const checkWinner = (boxes) => {
        // ...
        let tmpWinner;
        console.log('boxes', boxes);
        // Хэвтээ шалгалт
        if (boxes[0] !== '' && boxes[0] === boxes[1] && boxes[1] === boxes[2]) {
            tmpWinner = boxes[0]
        }
        if (boxes[3] !== '' && boxes[3] === boxes[4] && boxes[4] === boxes[5]) {
            tmpWinner = boxes[3]
        }
        if (boxes[6] !== '' && boxes[6] === boxes[7] && boxes[7] === boxes[8]) {
            tmpWinner = boxes[6]
        }

        if (tmpWinner) setWinner(tmpWinner)
        else {
            const emptyBox = boxes.filter(box => box === '')

            // Tentssen
            if (emptyBox.length === 0) {
                console.log('emptyBox', emptyBox, emptyBox.length);
                setWinner(null)
            }
        }


    }
    const handleReset = () => {
        setBoxes(defaultBoxes)
        setWinner()
        setLastClick('')
    }

    return (
        <div className='container-tic-tac'>
            <div className="main">
                {(winner || winner === GAME_STATES.TIED) &&
                    <div>
                        <h1> {winner === GAME_STATES.TIED ? 'Players tied' : `Player ${winner} wins`} </h1>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                }
                {winner === GAME_STATES.PLAYING && boxes.map((box, i) =>
                    <button onClick={() => handleClick(i)} className="box">{box}</button>
                )}
            </div>
        </div>
    )
}

export default TicTac   