import Header from './components/Header'
import TrackerSegment from './components/TrackerSegment';

//todo logging spending
//todo spell tracker
//todo ammo tracker
//todo weight tracker
//todo DM vision
//todo adding widgets

function App() {

  // Save Coins
  const saveCoins = (coins) => {
    //console.log(coins)
  }

  return (
    <div className="App">
      <Header title='Welcome to Coinpurse'/>
      <div className='tracker-grid'>
        <TrackerSegment title='Coin Tracker' trackerType='coin'/>
        <TrackerSegment title='Spell Tracker' trackerType='spell'/>
      </div>
    </div>
  ); 
}

export default App;
