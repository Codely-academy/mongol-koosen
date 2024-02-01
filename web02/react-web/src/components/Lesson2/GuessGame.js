import React, { useState } from 'react'

const GuessGame = () => {
    const generateRandom = () => {
        return Math.floor(Math.random() * 101)
    }

    const [randomNum, setRandomNum] = useState(generateRandom());
    const [input, setInput] = useState()
    const [hint, setHint] = useState('')
    const [hp, setHp] = useState(5)


    const onChange = (e) => {
        const text = e.target.value
        console.log("TEXT", text)
        setInput(parseInt(text))
    }
    const reset = () => {
        setHp(5);
        setRandomNum(generateRandom());
        setHint('')
        setInput('')
    }
    const onClick = () => {
        console.log(randomNum, input);
        if (randomNum === input) {
            // win
            setHint('Зөв таалаа')

        } else if (randomNum > input) {
            // baga
            const nextHp = hp - 1
            setHp(nextHp)
            setHint(`Бага байна: Үлдсэн амь: ${nextHp}`)

        } else {
            // ih
            const nextHp = hp - 1
            setHp(nextHp)
            setHint(`Их байна: Үлдсэн амь: ${nextHp}`)
        }
    }

    const isLost = hp === 0;
    return (
        <div className='guess-game-container'>
            <h1>Санасан тоо хэд вэ?</h1>
            <p> 1-100 хооронд тоо таагаарай</p>

            {isLost ?
                <div>
                    <h1>Та хожигдлоо {randomNum}</h1>
                    <button onClick={reset} > Дахин эхлэх</button>
                </div>
                :
                <div>
                    <div>
                        <input onChange={onChange} type="number" placeholder='Энд тоо бичнэ үү' />
                        <button onClick={onClick} > Таах </button>
                    </div>
                    <h3>Хинт: {hint}</h3>
                </div>

            }

        </div>
    )
}

export default GuessGame