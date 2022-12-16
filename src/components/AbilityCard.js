import React from 'react'

const AbilityCard = ({ abilityName, abilityUses }) => {
  return (
    <>
      <div className='check-grid'>
      {
        [...Array(abilityUses).keys()].map((x) => (
          <input type='checkbox' className='big-checkbox'/>
        ))
        // abilityUses.for(() = (
        // ))
      }
      </div>
      <h2>{ abilityName }</h2>
    </>
  )
}

export default AbilityCard