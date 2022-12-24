import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'


const SpellCard = ({ spellName, spellRange, spellLevel, spellDescription, childNum }) => {

  return (
    <div className='spell-card'>
        <div align='right'>
          <AiOutlineInfoCircle id={'desc-' + childNum}/>
        </div>
        <Tooltip anchorId={'desc-' + childNum} place='top' className='tooltip'>
          <div>
            <span id='tooltip'>{ spellDescription }</span>
          </div>
        </Tooltip>
        <h1 align='center'>{ spellName }</h1>
        <div align='center'>
            <h2>{ spellRange }</h2>
            <h2 id='level'>Level { spellLevel } spell</h2>
        </div>
    </div>
  )
}

export default SpellCard