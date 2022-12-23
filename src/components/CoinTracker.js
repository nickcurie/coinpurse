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

        if(coinCounter > 1000000){ //able to convert to PP
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
                            <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**3)} id='coin-setter'/> <span>PP</span>
                            <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**2)} id='coin-setter'/> <span>GP</span>
                            <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**1)} id='coin-setter'/> <span>SP</span>
                            <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**0)} id='coin-setter'/> <span>CP</span>
                        </div>
                        
                        {/* <Button color='#00a1a3' text='In PP' textColor='black'  onClick={() => onClickIntialCoinValue(3)}/>
                        <Button color='gold' text='In GP' textColor='black'  onClick={() => onClickIntialCoinValue(2)}/>
                        <Button color='silver' text='In SP' textColor='black' onClick={() => onClickIntialCoinValue(1)}/>
                        <Button color='#B87333' text='In CP' textColor='black' onClick={() => onClickIntialCoinValue(0)}/> */}
                        <Button color='gold' text='Submit' textColor='black' onClick={() => onClickIntialCoinValue(0)}/>
                    </div> 
                :
                    <>
                        <div className="manipulate-coins">
                            {/* <div className='button-grid'>
                                <Button text='+1' color='#00d9e0' textColor='black' onClick={() => incrementCoins(1*coinType)} />
                                <Button text='+5' color='#00d9e0' textColor='black' onClick={() => incrementCoins(5*coinType)} />
                                <Button text='+10' color='#00d9e0' textColor='black' onClick={() => incrementCoins(10*coinType)} />
                                <Button text='+50' color='#00d9e0' textColor='black' onClick={() => incrementCoins(50*coinType)} />
                                <Button text='+100' color='#00d9e0' textColor='black' onClick={() => incrementCoins(100*coinType)} />
                                
                                <Button text='-1' color='#f8574f' textColor='black' onClick={() => incrementCoins(-1*coinType)} />
                                <Button text='-5' color='#f8574f' textColor='black' onClick={() => incrementCoins(-5*coinType)}/>
                                <Button text='-10' color='#f8574f' textColor='black' onClick={() => incrementCoins(-10*coinType)}/>
                                <Button text='-50' color='#f8574f' textColor='black' onClick={() => incrementCoins(-50*coinType)}/>
                                <Button text='-100' color='#f8574f' textColor='black' onClick={() => incrementCoins(-100*coinType)}/>
                            </div> */}
                            
                            <div className='flex-container'>
                                <div className="form-control">
                                    <form ref={customCoinAmount}>
                                        <input type='number' placeholder='Custom amount'/>
                                    </form>
                                </div>

                                <div className="" id='coinpicker'>
                                    <Dropdown options={[
                                        { label: 'PP', value: 100**3},
                                        { label: 'GP', value: 100**2},
                                        { label: 'SP', value: 100},
                                        { label: 'CP', value: 1}
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
