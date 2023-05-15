import { useState, useRef } from "react"

import Button from './Button'
import Dropdown from './Dropdown'

const CoinTracker = () => {

    const [coins, setCoins] = useState(0)
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const [coinType, setCoinType] = useState(1)

    const customCoinAmount = useRef(null)

    const handleChange = (event) => {
        setCoinType(event.target.value)
    }
    
    const onClickIntialCoinValue = (coinConversion) => {

        if(!coins){
            alert("Please enter starting coin amount")
            return
        }

        setCoins(coins * Math.pow(100, coinConversion))
        setHasBeenClicked(!hasBeenClicked)
        return false
    }
    
    const incrementCoins = (val) => {
        setCoins(coins + val)
    }

    const calcCoinValue = (coins) => {
        var coinCounter = coins
        var coinValue = "You have "

        if(coinCounter >= 1000000){ //able to convert to PP
            coinValue = coinValue + Math.floor(coinCounter / 1000000) + " PP "
            coinCounter = coinCounter % 1000000
        }

        if(coinCounter > 10000){ //able to convert to GP
            coinValue = coinValue + Math.floor(coinCounter / 10000) + " GP "
            coinCounter = coinCounter % 10000
        }

        if(coinCounter > 100){ //able to convert to SP
            coinValue = coinValue + Math.floor(coinCounter / 100) + " SP "
            coinCounter = coinCounter % 100
        }

        if(coinCounter >= 0){ //able to convert to CP
            coinValue = coinValue + coinCounter + " CP"
        }

        if (coinCounter < 0){
            coinValue = coinValue + "no money"
        }
        
        //console.log(coins)
        return coinValue
    }

    return (
        <>
            <h2 hidden={!hasBeenClicked}>
                {calcCoinValue(coins)}
            </h2>
            {
                !hasBeenClicked 
                ? 
                    <div className="add-form">
                        <div className="form-control">
                            <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**3)} id='coin-setter'/> <span className='platinum-coin'>PP</span>
                            <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**2)} id='coin-setter'/> <span className='gold-coin'>GP</span>
                            <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**1)} id='coin-setter'/> <span className='silver-coin'>SP</span>
                            <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**0)} id='coin-setter'/> <span className='copper-coin'>CP</span>
                        </div>
                        
                        <Button text='Submit' onClick={() => onClickIntialCoinValue(0)}/>
                    </div> 
                :
                    <>
                        <div className="manipulate-coins">
                            <div className='flex-container'>
                                <div className="form-control">
                                    <form ref={customCoinAmount}>
                                        <input type='number' placeholder='Custom amount'/>
                                    </form>
                                </div>

                                <div className="" id='coinpicker'>
                                    <Dropdown options={[
                                        { label: 'PP', value: 100**3, type: 'platinum-coin'},
                                        { label: 'GP', value: 100**2, type: 'gold-coin'},
                                        { label: 'SP', value: 100, type: 'silver-coin'},
                                        { label: 'CP', value: 1, type: 'copper-coin'}
                                    ]} value={coinType} onChange={handleChange}/>
                                </div>
                            </div>
                                    
                            <div className="add-subtract">
                                <Button text='Add' color='#00d9e0' textColor='black' onClick={() => incrementCoins(customCoinAmount.current[0].value*coinType)}/>
                                <Button text='Subtract' color='#f8574f' textColor='black' onClick={() => incrementCoins(-customCoinAmount.current[0].value*coinType)}/>
                            </div>                                                         
                        </div>
                    </>
            }
        </>
        
    )
}

export default CoinTracker
