import Counter from './Counter';

const KillCard = ({ enemyName }) => {
  return (
    <Counter counterFor={enemyName}></Counter>
  )
}

export default KillCard