import React, { useState } from 'react';
import Button from './Button';

import ProgressBar from 'react-bootstrap/ProgressBar';

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

  const healthCheck = (type) => {
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
              <input type='number' onChange={(e) => setMaxHealth(e.target.value)} id='adder'/>
            </div>
            <Button text='Submit' onClick={() => onClickSetMaxHealth()}/>
          </div>
        :
        <div>
          <h1 id='health'>{currentHealth} / {maxHealth}</h1>
          <div className='next-to'>
            <Button text={'+'} onClick={() => healthCheck('add')}></Button>
            <Button text={'-'} onClick={() => healthCheck('sub')}></Button>
          </div>
          <div className='under'>
            <Button text={'Change max HP'} onClick={() => setHasHealth(false)}></Button>
          </div>
        </div>
      }
    </>
  )
}

export default HealthTracker