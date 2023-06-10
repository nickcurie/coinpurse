import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Counter = ({counterFor}) => {

  const [number, setNumber] = useState(1);
  const [disabledProp, setDisabledProp] = useState('')

  useEffect(() => {
    if (number < 1) {
      setDisabledProp('disable-button');
    } else {
      setDisabledProp('');
    }
  }, [number])

  // prevents number from going below zero
  const constrainNumber = (type) => {
    if (type === 'add') {
      setNumber(number + 1);
    } else {
      if (number >= 1) {
        setNumber(number - 1);
      }
    }
  }

  return (
    <div className='counter-and-label-grid'>
      <div className='counter-grid' id='rounded-rectangle'>
        <button className='as-text' onClick={() => constrainNumber('sub')} id={disabledProp}><FontAwesomeIcon icon={faMinus}/></button>
        <p>{number}</p>
        <button className='as-text' onClick={() => constrainNumber('add')}><FontAwesomeIcon icon={faPlus}/></button>
      </div>
      <h2>{counterFor}</h2>
    </div>
  )
}

export default Counter