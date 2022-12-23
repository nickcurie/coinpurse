import React, { useState } from 'react'
import AbilityCard from './AbilityCard';
import Button from './Button';

const AbilityTracker = () => {

  // [["x", 3], ["y", 4]]
  const [abilities, setAbilities] = useState([]);
  const [abilityName, setAbilityName] = useState('');
  const [uses, setUses] = useState('');

  const onClickHandleAddAbility = () => {
    setAbilities(abilities => [...abilities, [abilityName, uses]]);
    setUses('');
    setAbilityName('');
  };

  return (
    <>
        <div className='add-form'>
            <div className='form-control'>
                <input placeholder='Ability Name' value={abilityName} onChange={(e) => setAbilityName(e.target.value)}/>
                <input type='number' placeholder='Number of Uses' id='health-setter' value={uses} onChange={(e) => setUses(e.target.valueAsNumber)}/>
            </div>
            <Button text='Submit' onClick={() => onClickHandleAddAbility()}/>
        </div>
        <div className='ability-grid'>
          {
            abilities.map((ability) => (
              <AbilityCard abilityName={ ability[0] } abilityUses={ ability[1] }/>
            ))
          }
        </div>
    </>
  )
}

export default AbilityTracker