import React, { useState } from 'react'
import Ring from './Ring'

const AbilityCard = ({ abilityId, abilityName, abilityUses }) => {
  const [currentUses, setCurrentUses] = useState(abilityUses);
  
  const restrictUses = () => {
    if (currentUses >= 1) {
      setCurrentUses(currentUses-1);
    }
  }

  const changeProgress = () => {
    let thisAbility = document.querySelector('#'+abilityId+' .outer-ring');
    let thisAbilityStyle = getComputedStyle(thisAbility);
    console.log(thisAbilityStyle.getPropertyValue('--right-start-angle'));

    let percent = currentUses / abilityUses * 100;
    // these values will animate from the start every time
    //* percent : [right-start, right-end], [left-start, left-end]
    //* 100%    : [0deg, 0deg],             [0deg, 0deg]
    //* 75%     : [0deg, 90deg],            [0deg, 0deg]
    //* 50%     : [0deg, 180deg],           [0deg, 0deg]
    //* 25%     : [0deg, 180deg],           [0deg, 90deg]
    //* 0%      : [0deg, 180deg],           [0deg, 180deg]

    if (percent > 50) {
      console.log('changed');
      thisAbility.style.setProperty('--right-start-angle', '90deg');
      thisAbility.style.setProperty('--right-end-angle', '180deg');
      
    }
  }

  return (
    <div id={ abilityId } className='ability-card' >
      <Ring totalUses={ abilityUses } currentUses={ currentUses }/>
      <h2>{ abilityName }</h2>
      <button onClick={() => changeProgress()}>test</button>
    </div>
  )
}

export default AbilityCard