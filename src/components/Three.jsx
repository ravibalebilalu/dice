import React from 'react'

const Three = ({dicevalue, roleDice}) => {
  return (
    <div className='three'
     onClick={roleDice}
    >
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
    </div>
  )
}

export default Three