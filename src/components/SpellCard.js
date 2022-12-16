import { useState } from 'react'

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'


const SpellCard = ({ spellName, spellRange, spellLevel, spellDescription }) => {

  const test = () => {
    console.log(spellDescription);
    return spellDescription;
  }

  return (
    <div className='spell-card'>
        <div align='right'>
          <AiOutlineInfoCircle id='desc'/>
        </div>
        <Tooltip anchorId='desc' place='top' className='tooltip'>
          <div>
            <span id='tooltip'>{ test() }</span>
          </div>
        </Tooltip>
        <h1 align='center'>{ spellName }</h1>
        <div align='center'>
            <h2>{ spellRange }</h2>
            <h2 id='level'>Level { spellLevel } spell</h2>
            <input type='checkbox' className='big-checkbox'/>
            <input type='checkbox' className='big-checkbox'/>
            <input type='checkbox' className='big-checkbox'/>
        </div>
    </div>
  )
}

export default SpellCard