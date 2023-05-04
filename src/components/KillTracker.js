import React, { useState } from 'react';
import Button from './Button';
import KillCard from './KillCard';


const KillTracker = () => {
  const [enemyName, setEnemyName] = useState('');
  const [enemies, setEnemies] = useState([]);

  const onClickSetEnemyName = () => {
    setEnemies(enemies => [...enemies, enemyName]);
    setEnemyName('');
  }


  return (
    <>
      <div className='add-form'>
        <div className='form-control'>
          <input placeholder='Enemy Name' value={enemyName} onChange={(e) => setEnemyName(e.target.value)}/>
        </div>
        <Button text='Submit' onClick={() => onClickSetEnemyName()}/>
      </div>
      <div className='ability-grid'>
        {
          enemies.map((name) => (
            <KillCard enemyName={name}/>
          ))
        }
      </div>
    </>
  )
}

export default KillTracker