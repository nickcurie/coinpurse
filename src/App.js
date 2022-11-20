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
    setTrackerSegments([...trackerSegments, "spell"])
  }

  return (
    <div className="App">
      <Header title='Welcome to Coinpurse'/>
      <div className='tracker-grid'>
        <TrackerSegment title='Coin Tracker' trackerType='coin'/>
        <TrackerSegment title='Spell Tracker' trackerType='spell'/>
        {trackerSegments.map((item) => ( <TrackerSegment title={item +' tracker'} trackerType={item} />))}
        <div className='test'>
          <Button color='#999' text='+' textColor='black' shape='circle' onClick={() => addTrackerSegment()}/>
        </div>
      </div>
    </div>
  ); 
}

export default App;
