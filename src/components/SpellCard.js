import { useState } from 'react'
import ReactTooltip from 'react-tooltip'

const SpellCard = ({ spellName, spellRange, spellLevel, spellDescription }) => {

  return (
    <div>
        <p align='right' data-tip data-for='desc'>?</p>
        <ReactTooltip id='desc' place='top' effect='solid'>
          { spellDescription }
        </ReactTooltip>
        <h1 align='center'>{ spellName }</h1>
        <div align='center'>
            <h2>{ spellRange }</h2>
            <h2>Level { spellLevel } spell</h2>
            <input type='checkbox' appearance='none'/>
            <input type='checkbox' />
            <input type='checkbox' />
        </div>
    </div>
  )
}

export default SpellCard