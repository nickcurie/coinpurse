import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'


const SpellCard = ({ spellName, spellRange, spellLevel, spellDescription, childNum }) => {

  const formatSpell = () => {
    if (spellLevel === 0) {
      return 'Cantrip'
    } else {
      return 'Level ' + spellLevel + ' spell'
    }
  }

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
            <h2 id='level'>{ formatSpell() }</h2>
        </div>
    </div>
  )
}

export default SpellCard