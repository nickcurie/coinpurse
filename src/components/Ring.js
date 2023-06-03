import React from 'react'

const Ring = ({currentUses, totalUses}) => {
  return (
    <div className='outer-ring'>
      <div className='inner-ring left'>
        <div className='fill'></div>
      </div>
      <div className='inner-ring right'>
        <div className='fill'></div>
      </div>
      <div className='circle-cover'>
        <span>{currentUses + '/' + totalUses}</span>
      </div>
    </div>
  )
}

export default Ring