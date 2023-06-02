import React from "react";
import Button from "./Button";
import CoinTracker from "./CoinTracker";
import HealthTracker from "./HealthTracker";
import SpellTracker from "./SpellTracker";
import AbilityTracker from "./AbilityTracker";
import KillTracker from "./KillTracker";

const renderSwitch = (param, data) => {
    switch(param){
        case 'coin':
            return <CoinTracker/>
        case 'spell':
            return <SpellTracker/>
        case 'health':
            return <HealthTracker loadCurrentHealth={data?.currentHealth} loadMaxHealth={data?.maxHealth}/>
        case 'ability':
            return <AbilityTracker/>
        case 'kill':
            return <KillTracker/>
        default:
            return <Button text='not implemented'/>
    }
}

const TrackerSegment = ({ title, trackerType, data }) => {
  return (
    <div>
        <fieldset className='fieldset-content'>
            <legend id='legend-title'>
                {title}
            </legend>
            {renderSwitch(trackerType, data)}
            
        </fieldset>
    </div>
  );
};

export default TrackerSegment;
