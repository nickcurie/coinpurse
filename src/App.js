import { useState, useRef } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import TrackerSegment from "./components/TrackerSegment";

//todo logging spending
//todo ammo tracker
//todo weight tracker
//todo DM vision
//todo notes
//todo removing items

function App() {
  const [trackerSegments, setTrackerSegments] = useState([]);
  const [configData, setConfigData] = useState('');
  const newTrackerModal = useRef(null);
  const configModal = useRef(null);

  const addTrackerSegmentAndClose = (trackerType, data) => {
    setTrackerSegments([...trackerSegments, {'trackerType' : trackerType, 'data' : data}]);
    if (newTrackerModal.current) {
      newTrackerModal.current.close();
    }
  }

  // Technically, it's an issue that multiple elements can have the same ID
  // but it's fine here because it'll only grab the data from the first card with said id
  const printConfig = () => {
    let json = JSON.stringify({
      "currentHealth" : document.getElementById('current-health').innerHTML,
      "maxHealth" : document.getElementById('max-health').innerHTML
    });
    setConfigData(json);
  }

  const loadConfig = () => {
    let json = JSON.parse(configData);
    if (json.currentHealth && json.maxHealth) {
      addTrackerSegmentAndClose("Health", {'currentHealth' : json.currentHealth, 'maxHealth' : json.maxHealth})
    }
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
        {trackerSegments.map((item, i) => ( <TrackerSegment title={item.trackerType +' Tracker'} trackerType={item.trackerType.toLowerCase()} data={item.data} trackerId={i}/>))}
        <div className='add-tracker'>
          <Button text='+' shape='circle' onClick={() => newTrackerModal.current.showModal()}/>
        </div>
      </div>
      <div className='open-config'>
        <Button text='Config' onClick={() => configModal.current.showModal()}/>
      </div>

      <dialog className='add-tracker-prompt' ref={newTrackerModal}>
        <div align='center'>
          <h2>Add a tracker</h2>
        </div>
        <div className="add-tracker-button-container">
          <Button
            text="Health"
            onClick={() => addTrackerSegmentAndClose("Health")}
          ></Button>
          <Button
            text="Coin"
            onClick={() => addTrackerSegmentAndClose("Coin")}
          ></Button>
          <Button
            text="Spell"
            onClick={() => addTrackerSegmentAndClose("Spell")}
          ></Button>
          <Button
            text="Ability"
            onClick={() => addTrackerSegmentAndClose("Ability")}
          ></Button>
          <Button
            text="Kill"
            onClick={() => addTrackerSegmentAndClose("Kill")}
          ></Button>
        </div>
        <Button text='Close' onClick={() => newTrackerModal.current.close()}></Button>
      </dialog>

      <dialog className='config-modal' ref={configModal}>
        <div className='config-container'>
          <textarea value={ configData } type="text" id="config-input" onChange={(e) => setConfigData(e.target.value)}/>
          <div className='config-options'>
            <Button text="Save Config" onClick={() => printConfig()}/>
            <Button text="Load Config" onClick={() => loadConfig()}/>
          </div>
          <Button text='Close' onClick={() => configModal.current.close()}/>
        </div>
      </dialog>
    </div>
  );
}

export default App;
