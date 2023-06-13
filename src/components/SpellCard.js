import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const SpellCard = ({
  spellName,
  spellRange,
  spellLevel,
  spellDescription,
  childNum,
  spellCastTime,
  spellDuration,
  spellConcentration,
}) => {
  const formatSpellLevel = () => {
    if (spellLevel === 0) {
      return "Cantrip";
    } else {
      return "Level " + spellLevel;
    }
  };

  const formatSpellName = () => {
    return spellName.split("/").join("/ ");
  };

  const handleSpellCardClick = () => {
    // find a valid checkbox to check
    // if we cant find one do nothing
    // if all checkboxes are checked do nothing
    let checkboxId = "lvl-" + spellLevel + "-chk-";
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
  };

  return (
    <div className="spell-card" onClick={() => handleSpellCardClick()}>
      <div className="info-container">
        <FontAwesomeIcon icon={faCircleInfo} id={"extra-" + childNum} />
        <FontAwesomeIcon
          icon={faCircleQuestion}
          id={"desc-" + childNum}
          className="info-container-left"
        />
      </div>
      <Tooltip
        anchorId={"desc-" + childNum}
        place="top"
        className="desc-tooltip"
      >
        <div>
          <span id="desc-tooltip">{spellDescription}</span>
        </div>
      </Tooltip>
      <Tooltip
        anchorId={"extra-" + childNum}
        place="top"
        className="extra-tooltip"
      >
        <div id="extra-tooltip">
          <p>{"Cast Time: " + spellCastTime}</p>
          <p>{"Duration: " + spellDuration} </p>
          {spellConcentration ? <p>Concentration</p> : <></>}
        </div>
      </Tooltip>
      <h2>{formatSpellName()}</h2>
      <h3>{spellRange}</h3>
      <h3 id="level">{formatSpellLevel()}</h3>
    </div>
  );
};

export default SpellCard;
