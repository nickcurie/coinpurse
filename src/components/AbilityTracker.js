import React, { useState } from 'react'
import AbilityCard from './AbilityCard';
import Button from './Button';

const AbilityTracker = () => {
  //TODO: don't use checkboxes for use tracking

  // [["x", 3], ["y", 4]]
  const [abilities, setAbilities] = useState([]);
  const [abilityName, setAbilityName] = useState('');
  const [uses, setUses] = useState('');

  const onClickHandleAddAbility = () => {
    let res = checkInputOk(abilityName, uses)
    if (res.ok) {
      setAbilities(abilities => [...abilities, [abilityName, uses]]);
      //set inputs back to empty
      setUses('');
      setAbilityName('');
    } else {
      alert(res.msg)
    }
  };

  function checkInputOk(name, uses) {
    if (name === '' || uses === '') {
      return {
        ok: false,
        msg: "name or number of uses empty"
      };
    }

    if (name.length > 25) {
      return {
        ok: false,
        msg: "name too long"
      };
    }

    if (uses > 8) {
      return {
        ok: false,
        msg: "too many uses"
      };
    }

    if (uses <= 0) {
      return {
        ok: false,
        msg: "too little uses"
      };
    }

    return {
      ok: true,
      msg: null
    };
  }

  const restrictUses = (usesValue) => {
    if (usesValue <= 8 && usesValue > 0) {
      setUses(usesValue);
    }
  }

  const restrictName = (name) => {
    if (name.length <= 25) {
      setAbilityName(name);
    }
  }

  return (
    <>
      <div className='add-form'>
          <div className='form-control'>
              <input placeholder='Ability Name' value={abilityName} onChange={(e) => restrictName(e.target.value)}/>
              <input type='number' placeholder='Number of Uses' value={uses} onChange={(e) => restrictUses(e.target.valueAsNumber)} autoComplete='off'/>
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