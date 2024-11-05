import React from 'react'

const Four = ({dicevalue, roleDice}) => {
  return (
    <div className='four'
    onClick={roleDice}
    >
       <div className="four-upper">
       <div className="dot"></div>
       <div className="dot"></div>
       </div>
       <div className="four-lower">
       <div className="dot"></div>
       <div className="dot"></div>
       </div>
    </div>
  )
}

export default Four