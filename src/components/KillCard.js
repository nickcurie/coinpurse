import { useState } from 'react'
import Button from './Button'

const KillCard = ({ enemyName }) => {

  const [kills, setKills] = useState(0);

  return (
    <div className='kill-card'>
      <Button text={'+'} onClick={() => setKills(kills+1)}/>
      <h2>{kills}</h2>
      <Button text={'-'} onClick={() => setKills(kills-1)}/>
      <h2>{enemyName}</h2>
    </div>
  )
}

export default KillCard