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

  const handleSpellCardClick = () => {
    // find a valid checkbox to check
    // if we cant find one do nothing
    // if all checkboxes are checked do nothing
    let checkboxId = 'lvl-' + spellLevel + '-chk-';
    let checkbox;
    for (let i = 0; i < 4; i++) {
      checkbox = document.getElementById(checkboxId + i);
      // if we hit a checkbox that doesn't exist we can break out of the loop to save cycles
      // since checkboxes are in increasing numeric order
      if (checkbox == null) {
        break;
      }
      // if the checkbox we found isn't checked, check it and break out of the loop
      if (!checkbox.checked) {
        checkbox.checked = true;
        break;
      }
    }
  }

  return (
    <div className='spell-card' onClick={() => handleSpellCardClick()}>
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