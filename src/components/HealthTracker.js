import React, { useState } from 'react';
import Button from './Button';

//TODO: temp health

const HealthTracker = () => {

  const [hasHealth, setHasHealth] = useState(false);
  const [maxHealth, setMaxHealth] = useState(null);
  const [currentHealth, setCurrentHealth] = useState(null);

  const onClickSetMaxHealth = () => {
    if (!maxHealth) {
      alert("Enter max health");
      return;
    }

    setMaxHealth(maxHealth);
    setCurrentHealth(maxHealth);
    setHasHealth(true);
    return false;
  }

  const constrainHealth = (type) => {
    if (type === 'add') {
      if (currentHealth + 1 <= maxHealth) {
        setCurrentHealth(currentHealth + 1);
      }
    } else {
      if (currentHealth - 1 >= 0) {
        setCurrentHealth(currentHealth - 1);
      }
    }
  }

  return (
    <>
      {
        !hasHealth
        ?
          <div className='add-form'>
            <div className='form-control'>
              <input type='number' onBlur={(e) => setMaxHealth(e.target.value)} placeholder='Max Health'/>
            </div>
            <div align='center'>
              <Button text='Submit' onClick={() => onClickSetMaxHealth()}/>
            </div>
          </div>
        :
        <div className='health-content'>
          <h1 id='health'>{currentHealth} / {maxHealth}</h1>
          <Button text={'-'} onClick={() => constrainHealth('sub')} propId='health-minus'></Button>
          <Button text={'+'} onClick={() => constrainHealth('add')} propId='health-plus'></Button>
          <Button text={'Change max HP'} onClick={() => setHasHealth(false)} propId={'change-max-health'}></Button>
        </div>
      }
    </>
  )
}

export default HealthTracker