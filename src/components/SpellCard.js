import { useState } from 'react'
import ReactTooltip from 'react-tooltip'

const SpellCard = ({ spellName, spellRange, spellLevel, spellDescription }) => {

  return (
    <div className='spell-card'>
        <div align='right'>
          <span data-tip data-for='desc'>Info</span>
        </div>
        <ReactTooltip id='desc' place='top' effect='solid'>
          { spellDescription }
        </ReactTooltip>
        <h1 align='center'>{ spellName }</h1>
        <div align='center'>
            <h2>{ spellRange }</h2>
            <h2 id='bruh'>Level { spellLevel } spell</h2>
            <input type='checkbox' className='big-checkbox'/>
            <input type='checkbox' className='big-checkbox'/>
            <input type='checkbox' className='big-checkbox'/>
        </div>
    </div>
  )
}

export default SpellCard