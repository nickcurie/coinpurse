import React, { useCallback, useEffect, useState } from "react";
import Ring from "./Ring";

const AbilityCard = ({ abilityId, abilityName, abilityUses, signal }) => {
  const [currentUses, setCurrentUses] = useState(abilityUses);

  const restrictUses = () => {
    if (currentUses >= 1) {
      setCurrentUses(currentUses - 1);
    }
  };

  const setCurrentUsesToTotal = useCallback(
    (signal) => {
      setCurrentUses(abilityUses);
    },
    [abilityUses]
  );

  const changeProgress = useCallback(() => {
    let thisAbility = document.querySelector("#" + abilityId + " .outer-ring");

    let ratio = currentUses / abilityUses;
    // these values will animate from the start every time
    //* percent : [right-start, right-end], [left-start, left-end]
    //* 100%    : [0deg, 0deg],             [0deg, 0deg]
    //* 75%     : [0deg, 90deg],            [0deg, 0deg]
    //* 50%     : [0deg, 180deg],           [0deg, 0deg]
    //* 25%     : [0deg, 180deg],           [0deg, 90deg]
    //* 0%      : [0deg, 180deg],           [0deg, 180deg]

    if (ratio >= 0.5) {
      // ensure that left is full when resetting the uses back to max
      thisAbility.style.setProperty("--left-end-angle", "0deg");
      let rEnd = (1 - ratio) * 360;
      thisAbility.style.setProperty("--right-end-angle", rEnd + "deg");
    } else {
      // ensure that right has "finished" before left starts ticking down
      thisAbility.style.setProperty("--right-end-angle", "180deg");
      let lEnd = (1 - ratio) * 360 - 180;
      thisAbility.style.setProperty("--left-end-angle", lEnd + "deg");
    }
  }, [currentUses, abilityId, abilityUses]);

  useEffect(() => {
    changeProgress();
  }, [changeProgress]);

  useEffect(() => {
    setCurrentUsesToTotal(signal);
  }, [signal, setCurrentUsesToTotal]);

  return (
    <div id={abilityId} className="ability-card" onClick={() => restrictUses()}>
      <Ring totalUses={abilityUses} currentUses={currentUses} />
      <h2>{abilityName}</h2>
    </div>
  );
};

export default AbilityCard;
