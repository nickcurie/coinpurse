import React from 'react'
import Button from './Button'
import CoinTracker from './CoinTracker'
import SpellTracker from './SpellTracker'

const renderSwitch = (param) => {
    switch(param){
        case 'coin':
            return <CoinTracker/>
        case 'spell':
            return <SpellTracker/>
        default:
            return <Button text='not implemented'/>
    }
}

const TrackerSegment = ({ title, trackerType }) => {
  return (
    <div>
        <fieldset className='container'>
            <legend>
                {title}
            </legend>
            {renderSwitch(trackerType)}
            
        </fieldset>
    </div>
  )
}

export default TrackerSegment