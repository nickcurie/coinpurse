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
  const modal = useRef(null);

  const addTrackerSegmentAndClose = (trackerType, data) => {
    setTrackerSegments([...trackerSegments, {'trackerType' : trackerType, 'data' : data}]);
    if (modal.current) {
      modal.current.close();
    }
  }

  // Technically, it's an issue that multiple elements can have the same ID
  // but it's fine here because it'll only grab the data from the first card with said id
  const printConfig = () => {
    var json = JSON.stringify({
      "currentHealth" : document.getElementById('current-health').innerHTML,
      "maxHealth" : document.getElementById('max-health').innerHTML
    });
    document.getElementById('config-input').value = json;
  }

  const loadConfig = () => {
    var json = JSON.parse(document.getElementById('config-input').value);
    if (json.currentHealth && json.maxHealth) {
      addTrackerSegmentAndClose("Health", {'currentHealth' : json.currentHealth, 'maxHealth' : json.maxHealth})
    }
  }

  return (
    <div className="App">
      <Header title='Coinpurse'/>
      <Button text="Print Config" onClick={() => printConfig()}/>
      <Button text="Load Config" onClick={() => loadConfig()}/>
      <input type="text" id="config-input" />
      <div className='tracker-grid'>
        <TrackerSegment title='Health Tracker' trackerType='health'/>
        <TrackerSegment title='Coin Tracker' trackerType='coin'/>
        <TrackerSegment title='Spell Tracker' trackerType='spell'/>
        <TrackerSegment title='Ability Tracker' trackerType='ability'/>
        <TrackerSegment title='Kill Tracker' trackerType='kill'/>
        {trackerSegments.map((item) => ( <TrackerSegment title={item.trackerType +' Tracker'} trackerType={item.trackerType.toLowerCase()} data={item.data} />))}
        <div className='add-tracker'>
          <Button text='+' shape='circle' onClick={() => modal.current.showModal()}/>
        </div>
      </div>
      <dialog className="add-tracker-prompt" ref={modal}>
        <div align="center">
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
        <Button text="Close" onClick={() => modal.current.close()}></Button>
      </dialog>
    </div>
  );
}

export default App;
