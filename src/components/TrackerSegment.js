import React from 'react'
import Button from './Button'
import CoinTracker from './CoinTracker'
import HealthTracker from './HealthTracker'
import SpellTracker from './SpellTracker'
import AbilityTracker from './AbilityTracker'
import KillTracker from './KillTracker'

const renderSwitch = (param) => {
    switch(param){
        case 'coin':
            return <CoinTracker/>
        case 'spell':
            return <SpellTracker/>
        case 'health':
            return <HealthTracker/>
        case 'ability':
            return <AbilityTracker/>
        case 'kill':
            return <KillTracker/>
        default:
            return <Button text='not implemented'/>
    }
}

const TrackerSegment = ({ title, trackerType }) => {
  return (
    <div>
        <fieldset className='fieldset-content'>
            <legend id='legend-title'>
                {title}
            </legend>
            {renderSwitch(trackerType)}
            
        </fieldset>
    </div>
  )
}

export default TrackerSegment