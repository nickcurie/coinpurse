import Button from './Button'

import { useState } from "react"

const Segment = ({ title, onSave }) => {
    const [coins, setCoins] = useState(0)
    const [hasBeenClicked, setHasBeenClicked] = useState(false)

    const onClickGP = (e) => {
        e.preventDefault()

        if(!coins){
            alert("Please enter starting coin amount")
            return
        }

        setCoins(coins * 1000)
        onSave({ coins })
        setHasBeenClicked(!hasBeenClicked)
    }

    const onClickSP = (e) => {
        e.preventDefault()

        if(!coins){
            alert("Please enter starting coin amount")
            return
        }

        setCoins(coins * 100)
        onSave({ coins })
        setHasBeenClicked(!hasBeenClicked)
    }

    const onClickCP = (e) => {
        e.preventDefault()

        if(!coins){
            alert("Please enter starting coin amount")
            return
        }

        onSave({ coins })
        setHasBeenClicked(!hasBeenClicked)
    }

    const incrementCoins = (val) => {
        setCoins(coins + val)
    }

    const calcCoinValue = (coins) => {
        var coinCounter = coins
        var coinValue = "You have "

        if(coinCounter > 10000){
            coinValue = coinValue + Math.floor(coinCounter / 10000) + " GP "
            coinCounter = coinCounter % 10000
        }

        if(coinCounter > 100){
            coinValue = coinValue + Math.floor(coinCounter / 100) + " SP "
            coinCounter = coinCounter % 100
        }

        coinValue = coinValue + coinCounter + " CP"

        return coinValue
    }

    return (
        <div className='container'>
            <h1 className="header">
                {title} 
            </h1>
            <h2>
                {hasBeenClicked ? calcCoinValue(coins) : "You have 0 CP"}
            </h2>
            {
                !hasBeenClicked 
                ? 
                    <div className="add-form">
                        <div className="form-control">
                            <input type="number" placeholder="Enter coin amount" onChange={(e) => setCoins(e.target.value)}/>
                        </div>

                        <Button color='gold' text='In GP' textColor='black'  onClick={onClickGP}/>
                        <Button color='silver' text='In SP' textColor='black' onClick={onClickSP}/>
                        <Button color='#B87333' text='In CP' textColor='black' onClick={onClickCP}/>
                    </div> 
                :
                    <div className='grid-container'>
                        <Button text='+1' color='#53dd6c' textColor='black' onClick={() => incrementCoins(1)} />
                        <Button text='+5' color='#53dd6c' textColor='black' onClick={() => incrementCoins(5)} />
                        <Button text='+10' color='#53dd6c' textColor='black' onClick={() => incrementCoins(10)} />
                        <Button text='+50' color='#53dd6c' textColor='black' onClick={() => incrementCoins(50)} />
                        <Button text='+100' color='#53dd6c' textColor='black' onClick={() => incrementCoins(100)} />
                        <Button text='-1' color='#56203d' onClick={() => incrementCoins(-1)} />
                        <Button text='-5' color='#56203d' onClick={() => incrementCoins(-5)}/>
                        <Button text='-10' color='#56203d' onClick={() => incrementCoins(-10)}/>
                        <Button text='-50' color='#56203d' onClick={() => incrementCoins(-50)}/>
                        <Button text='-100' color='#56203d' onClick={() => incrementCoins(-100)}/>
                    </div>
            }
        </div>
        
    )
}

export default Segment
