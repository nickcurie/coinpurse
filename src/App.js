import Header from './components/Header'
import Button from './components/Button'
import Segment from './components/Segment'


function App() {

  // Save Coins
  const saveCoins = (coins) => {
    //console.log(coins)
  }

  return (
    <div className="App">
      <Header title='Welcome to Coinpurse'/>
      <Segment title='Coin Tracker' onSave={saveCoins} />
    </div>
  );
}

export default App;
