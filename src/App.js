import { useState, useRef } from 'react';
import Button from './components/Button';
import Header from './components/Header'
import TrackerSegment from './components/TrackerSegment';

//todo logging spending
//todo ammo tracker
//todo weight tracker
//todo DM vision
//todo adding widgets
//todo notes
//todo removing items

function App() {

  const [trackerSegments, setTrackerSegments] = useState([]);
  const modal = useRef(null);

  const addTrackerSegmentAndClose = (trackerType) => {
    setTrackerSegments([...trackerSegments, trackerType]);
    modal.current.close();
  }

  return (
    <div className="App">
      <Header title='Coinpurse'/>
      <div className='tracker-grid'>
        <TrackerSegment title='Health Tracker' trackerType='health'/>
        <TrackerSegment title='Coin Tracker' trackerType='coin'/>
        <TrackerSegment title='Spell Tracker' trackerType='spell'/>
        <TrackerSegment title='Ability Tracker' trackerType='ability'/>
        <TrackerSegment title='Kill Tracker' trackerType='kill'/>
        {trackerSegments.map((item) => ( <TrackerSegment title={item +' Tracker'} trackerType={item.toLowerCase()} />))}
        <div className='add-tracker'>
          <Button color='#D6E5E3' text='+' shape='circle' onClick={() => modal.current.showModal()}/>
        </div>
      </div>
      <dialog className='add-tracker-prompt' ref={modal}>
        <div align='center'>
          <h2>Add a tracker</h2>
        </div>
        <div className='add-tracker-button-container'>
          <Button text='Health' onClick={() => addTrackerSegmentAndClose("Health")}></Button>
          <Button text='Coin' onClick={() => addTrackerSegmentAndClose("Coin")}></Button>
          <Button text='Spell' onClick={() => addTrackerSegmentAndClose("Spell")}></Button>
          <Button text='Ability' onClick={() => addTrackerSegmentAndClose("Ability")}></Button>
          <Button text='Kill' onClick={() => addTrackerSegmentAndClose("Kill")}></Button>
        </div>
        <Button text='Close' onClick={() => modal.current.close()}></Button>
      </dialog>
    </div>
  ); 
}

export default App;
