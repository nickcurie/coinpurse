import { useState, useRef } from "react"

import Button from './Button'
import Dropdown from './Dropdown'

const CoinTracker = () => {

  const [coins, setCoins] = useState(0)
  const [hasSubmittedCoins, setHasSubmittedCoins] = useState(false)
  const [coinType, setCoinType] = useState(1)

  const customCoinAmount = useRef(null)

  const handleDenominationChange = (event) => {
    setCoinType(event.target.value);
  }
  
  const onClickInitialCoinValue = () => {

    if(!coins){
      alert("Please enter starting coin amount");
      return;
    }

    setCoins(coins);
    setHasSubmittedCoins(!hasSubmittedCoins);
    return false;
  }
  
  const incrementCoins = (val) => {
    setCoins(coins + val);
  }

  const calcCoinValue = (coins) => {
    let numberOfCoins = coins;
    let coinString = "";

    if(numberOfCoins >= 1000000){ //able to convert to PP
      coinString = coinString + Math.floor(numberOfCoins / 1000000) + " PP ";
      numberOfCoins = numberOfCoins % 1000000;
    }

    if(numberOfCoins > 10000){ //able to convert to GP
      coinString = coinString + Math.floor(numberOfCoins / 10000) + " GP ";
      numberOfCoins = numberOfCoins % 10000;
    }

    if(numberOfCoins > 100){ //able to convert to SP
      coinString = coinString + Math.floor(numberOfCoins / 100) + " SP ";
      numberOfCoins = numberOfCoins % 100;
    }

    if(numberOfCoins >= 0){ //able to convert to CP
      coinString = coinString + numberOfCoins + " CP";
    }

    if (numberOfCoins < 0){
      coinString = coinString + "0 CP";
      setCoins(0);
    }
    
    return coinString;
  }

  return (
    <>
      {
        !hasSubmittedCoins 
        ? 
          <div className="add-form">
            <div className="form-control">
              <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**3)} id='coin-setter'/> <span className='platinum-coin'>PP</span>
              <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**2)} id='coin-setter'/> <span className='gold-coin'>GP</span>
              <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**1)} id='coin-setter'/> <span className='silver-coin'>SP</span>
              <input type="number" onBlur={(e) => setCoins(coins + e.target.value * 100**0)} id='coin-setter'/> <span className='copper-coin'>CP</span>
            </div>
              
            <Button text='Submit' onClick={() => onClickInitialCoinValue()}/>
          </div> 
        :
          <>
            <h2 hidden={!hasSubmittedCoins}>
              {calcCoinValue(coins)}
            </h2>
            <div className="manipulate-coins">
              <div className='flex-container'>
                <div className="form-control">
                  <form ref={customCoinAmount}>
                    <input type='number' placeholder='Amount'/>
                  </form>
                </div>

                <div className="">
                  <Dropdown options={[
                    { label: 'PP', value: 100**3, type: 'platinum-coin'},
                    { label: 'GP', value: 100**2, type: 'gold-coin'},
                    { label: 'SP', value: 100, type: 'silver-coin'},
                    { label: 'CP', value: 1, type: 'copper-coin'}
                  ]} value={coinType} onChange={handleDenominationChange}/>
                </div>
              </div>
                      
              <div className="add-subtract">
                <Button text='Add' textColor='black' onClick={() => incrementCoins(customCoinAmount.current[0].value*coinType)}/>
                <Button text='Subtract' textColor='black' onClick={() => incrementCoins(-customCoinAmount.current[0].value*coinType)}/>
              </div>                                                         
            </div>
          </>
      }
    </>
  )
}

export default CoinTracker
