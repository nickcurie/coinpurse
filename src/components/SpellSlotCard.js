import React from 'react'

const SpellSlotCard = ({ characterLevel, classType }) => {

  const fullCasterTable = [
    [2,0,0,0,0,0,0,0,0], [3,0,0,0,0,0,0,0,0], [4,2,0,0,0,0,0,0,0], 
    [4,3,0,0,0,0,0,0,0], [4,3,2,0,0,0,0,0,0], [4,3,3,0,0,0,0,0,0], 
    [4,3,3,1,0,0,0,0,0], [4,3,3,2,0,0,0,0,0], [4,3,3,3,1,0,0,0,0], 
    [4,3,3,3,2,0,0,0,0], [4,3,3,3,2,1,0,0,0], [4,3,3,3,2,1,0,0,0], 
    [4,3,3,3,2,1,1,0,0], [4,3,3,3,2,1,1,0,0], [4,3,3,3,2,1,1,1,0], 
    [4,3,3,3,2,1,1,1,0], [4,3,3,3,2,1,1,1,1], [4,3,3,3,3,1,1,1,1], 
    [4,3,3,3,3,2,1,1,1], [4,3,3,3,3,2,2,1,1], 
  ]
  
  const halfCasterTable = [
    [0,0,0,0,0], [2,0,0,0,0], [3,0,0,0,0], [3,0,0,0,0], [4,2,0,0,0], 
    [4,2,0,0,0], [4,3,0,0,0], [4,3,0,0,0], [4,3,2,0,0], [4,3,2,0,0],
    [4,3,3,0,0], [4,3,3,0,0], [4,3,3,1,0], [4,3,3,1,0], [4,3,3,2,0],
    [4,3,3,2,0], [4,3,3,3,1], [4,3,3,3,1], [4,3,3,3,2], [4,3,3,3,2]
  ]

  const fullCasterClasses = ['sorcerer', 'wizard', 'druid', 'bard', 'cleric']

  function determineSpellSlots() {
    if (fullCasterClasses.includes(classType)) {
      return fullCasterSlots()
    } else {
      return halfCasterSlots()
    }
  }

  function fullCasterSlots() {
    return fullCasterTable[characterLevel-1]
  }

  function halfCasterSlots() {
    return halfCasterTable[characterLevel-1]
  }

  return (
    <>
      <h1>Spell Slots</h1>
      <div className='slots-grid'>
        {
          determineSpellSlots().map((x, i) => (
              (x !== 0 &&
                <div>
                  <h2 id='level'>Level {i+1}</h2>
                  <div className='level-slot'>
                    {
                      [...Array(x).keys()].map((y) => (
                        <input type='checkbox' className='big-checkbox' id={'lvl-'+i+'-chk-'+y}/>
                      ))
                    }
                  </div>
                </div>
              )
          ))
        }
      </div>
    </>
  )
}

export default SpellSlotCard