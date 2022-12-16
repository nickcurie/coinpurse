import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header'
import TrackerSegment from './components/TrackerSegment';

//todo logging spending
//todo spell tracker
//todo ammo tracker
//todo weight tracker
//todo DM vision
//todo adding widgets

function App() {

  const [trackerSegments, setTrackerSegments] = useState([])

  const addTrackerSegment = () => {
    setTrackerSegments([...trackerSegments, "x"])
  }

  return (
    <div className="App">
      <Header title='Coinpurse'/>
      <div className='tracker-grid'>
        <TrackerSegment title='Health Tracker' trackerType='health'/>
        <TrackerSegment title='Coin Tracker' trackerType='coin'/>
        <TrackerSegment title='Spell Tracker' trackerType='spell'/>
        <TrackerSegment title='Ability Tracker' trackerType='ability'/>
        {trackerSegments.map((item) => ( <TrackerSegment title={item +' tracker'} trackerType={item} />))}
        <div className='add-tracker'>
          <Button color='#D6E5E3' text='+' shape='circle' onClick={() => addTrackerSegment()}/>
        </div>
      </div>
    </div>
  ); 
}

export default App;
