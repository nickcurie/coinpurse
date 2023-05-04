import React, { useState } from 'react'

const Counter = ({counterFor}) => {

  const [number, setNumber] = useState(1);

  return (
    <div className='counter-and-label-grid'>
      <div className='counter-grid' id='rounded-rectangle'>
        <button className='as-text' onClick={() => setNumber(number-1)}>{'-'}</button>
        <text>{number}</text>
        <button className='as-text' onClick={() => setNumber(number+1)}>{'+'}</button>
      </div>
      <h2>{counterFor}</h2>
    </div>
  )
}

export default Counter