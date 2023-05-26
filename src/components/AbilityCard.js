import React from 'react'

const AbilityCard = ({ abilityName, abilityUses }) => {
  return (
    <div className='ability-card'>
      <h2>{ abilityName }</h2>
      <div className='check-grid'>
      {
        [...Array(abilityUses).keys()].map(() => (
          <input type='checkbox' className='big-checkbox'/>
        ))
      }
      </div>
    </div>
  )
}

export default AbilityCard