 import './dice.css'

const Two = ({dicevalue, roleDice}) => {
  return (
    <div className='two'
     onClick={roleDice}
    >
        <div className="dot"></div>
        <div className="dot"></div>
    </div>
  )
}

export default Two