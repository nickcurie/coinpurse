import React from "react";
import Button from "./Button";
import CoinTracker from "./CoinTracker";
import HealthTracker from "./HealthTracker";
import SpellTracker from "./SpellTracker";
import AbilityTracker from "./AbilityTracker";
import KillTracker from "./KillTracker";

let numHealth = 0;

const renderSwitch = (param, data, updateConfig) => {
  switch (param) {
    case "coin":
      return <CoinTracker />;
    case "spell":
      return <SpellTracker />;
    case "health":
      numHealth += 1;
      return (
        <HealthTracker
          loadCurrentHealth={data?.currentHealth}
          loadMaxHealth={data?.maxHealth}
          updateConfig={updateConfig}
          num={numHealth}
        />
      );
    case "ability":
      return <AbilityTracker />;
    case "kill":
      return <KillTracker />;
    default:
      return <Button text="not implemented" />;
  }
};

const TrackerSegment = ({
  title,
  trackerType,
  data,
  trackerId,
  updateConfig,
}) => {
  return (
    <div id={"tracker-" + trackerId}>
      <fieldset className="fieldset-content">
        <legend id="legend-title">{title}</legend>
        {renderSwitch(trackerType, data, updateConfig)}
      </fieldset>
    </div>
  );
};

export default TrackerSegment;
