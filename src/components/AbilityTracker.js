import React, { useState } from "react";
import AbilityCard from "./AbilityCard";
import Button from "./Button";

const AbilityTracker = () => {
  const maxUses = 15;
  const maxNameLength = 25;

  // [["x", 3], ["y", 4]]
  const [abilities, setAbilities] = useState([]);
  const [abilityName, setAbilityName] = useState("");
  const [uses, setUses] = useState("");
  const [resetSignal, setResetSignal] = useState(0);

  const onClickHandleAddAbility = () => {
    let res = checkInputOk(abilityName, uses);
    if (res.ok) {
      setAbilities((abilities) => [...abilities, [abilityName, uses]]);
      //set inputs back to empty
      setUses("");
      setAbilityName("");
    } else {
      alert(res.msg);
    }
  };

  function checkInputOk(name, uses) {
    if (name === "" || uses === "") {
      return {
        ok: false,
        msg: "name or number of uses empty",
      };
    }

    if (name.length > maxNameLength) {
      return {
        ok: false,
        msg: "name too long",
      };
    }

    if (uses > maxUses) {
      return {
        ok: false,
        msg: "too many uses",
      };
    }

    if (uses <= 0) {
      return {
        ok: false,
        msg: "too little uses",
      };
    }

    return {
      ok: true,
      msg: null,
    };
  }

  const restrictUses = (usesValue) => {
    if (usesValue <= maxUses && usesValue > 0) {
      setUses(usesValue);
    }
  };

  const restrictName = (name) => {
    if (name.length <= maxNameLength) {
      setAbilityName(name);
    }
  };

  const sendSignal = () => {
    setResetSignal(resetSignal + 1);
  };

  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <input
            placeholder="Ability Name"
            value={abilityName}
            onChange={(e) => restrictName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of Uses"
            value={uses}
            onChange={(e) => restrictUses(e.target.valueAsNumber)}
            autoComplete="off"
          />
        </div>
        <Button text="Submit" onClick={() => onClickHandleAddAbility()} />
      </div>
      <Button text="Long Rest" onClick={() => sendSignal()} />
      <div className="ability-grid">
        {abilities.map((ability, i) => (
          <AbilityCard
            abilityId={"ability-" + i}
            abilityName={ability[0]}
            abilityUses={ability[1]}
            signal={resetSignal}
          />
        ))}
      </div>
    </>
  );
};

export default AbilityTracker;
