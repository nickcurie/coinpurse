import { useState, useRef } from "react"

import Button from './Button'
import Dropdown from './Dropdown'

const CoinTracker = () => {

  const [coins, setCoins] = useState(0);
  const [numCoins, setNumCoins] = useState('');
  const [hasSubmittedCoins, setHasSubmittedCoins] = useState(false);
  const [coinType, setCoinType] = useState(1);

  const customCoinAmount = useRef(null)

  const platinumDenomination = 100**3;
  const goldDenomination = 100**2;
  const silverDenomination = 100**1;
  const copperDenomination = 100**0;
  

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
    setNumCoins('');
  }

  const calcCoinValue = (coins) => {
    let numberOfCoins = coins;
    let coinString = "";

    if(numberOfCoins >= platinumDenomination){ //able to convert to PP
      coinString = coinString + Math.floor(numberOfCoins / platinumDenomination) + " PP ";
      numberOfCoins = numberOfCoins % platinumDenomination;
    }

    if(numberOfCoins >= goldDenomination){ //able to convert to GP
      coinString = coinString + Math.floor(numberOfCoins / goldDenomination) + " GP ";
      numberOfCoins = numberOfCoins % goldDenomination;
    }

    if(numberOfCoins >= silverDenomination){ //able to convert to SP
      coinString = coinString + Math.floor(numberOfCoins / silverDenomination) + " SP ";
      numberOfCoins = numberOfCoins % silverDenomination;
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
            <div className="coin-setters">
              <div className='coin-setter'>
                <input type="number" onChange={(e) => setCoins(coins + e.target.value * platinumDenomination)}/> 
                <span className='platinum-coin'>PP</span>
              </div>
              <div className='coin-setter'>
                <input type="number" onChange={(e) => setCoins(coins + e.target.value * goldDenomination)}/> 
                <span className='gold-coin'>GP</span>
              </div>
              <div className='coin-setter'>
                <input type="number" onChange={(e) => setCoins(coins + e.target.value * silverDenomination)}/> 
                <span className='silver-coin'>SP</span>
              </div>
              <div className='coin-setter'>
                <input type="number" onChange={(e) => setCoins(coins + e.target.value * copperDenomination)}/> 
                <span className='copper-coin'>CP</span>
              </div>
            </div>
              
            <Button text='Submit' onClick={() => onClickInitialCoinValue()}/>
          </div> 
        :
          <>
            <h2 hidden={!hasSubmittedCoins}>
              {calcCoinValue(coins)}
            </h2>
            <div className="manipulate-coins">
              <div className="coin-selector">
                <input type='number' placeholder='Amount' value={numCoins} onChange={(e) => setNumCoins(e.target.value)}/>
                <Dropdown options={[
                  { label: 'PP', value: platinumDenomination, type: 'platinum-coin'},
                  { label: 'GP', value: goldDenomination, type: 'gold-coin'},
                  { label: 'SP', value: silverDenomination, type: 'silver-coin'},
                  { label: 'CP', value: copperDenomination, type: 'copper-coin'}
                ]} value={coinType} onChange={handleDenominationChange}/>
              </div>
                      
              <div className="add-subtract">
                <Button text='Add' textColor='black' onClick={() => incrementCoins(numCoins*coinType)}/>
                <Button text='Subtract' textColor='black' onClick={() => incrementCoins(-numCoins*coinType)}/>
              </div>                                                         
            </div>
          </>
      }
    </>
  )
}

export default CoinTracker
