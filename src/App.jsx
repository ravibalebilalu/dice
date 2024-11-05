import One from './components/One';
import './App.css';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five.jsx';
import Six from './components/Six.jsx';
import { useState } from 'react';
import NumberSelector from './components/NumberSelector.jsx';

function App() {
    const [dicevalue, setdicevalue] = useState(1);
    const [selectedNumber,setSelectedNumber] = useState(0)
    const [score,setScore] = useState(0)
    const [isClicked,setIsClicked] = useState(false)

    const handleNumber = (value)=>{
 
      setSelectedNumber(value)
      setIsClicked(true)
       
    }
const roleDice = ()=>{
  const newDiceValue = Math.ceil(Math.random()*6)
  setdicevalue(newDiceValue)
  if(newDiceValue===selectedNumber){
    setScore(score+1)
    setSelectedNumber(0)
    
  }
   
   setIsClicked(false)
  
  
}
    return (
        <div className="app">
          <NumberSelector
          handleNumber={handleNumber}
          selectedNumber={selectedNumber}
          isClicked={isClicked}
          score={score}
          dicevalue={dicevalue}
          />
            {dicevalue === 1 && <One  roleDice={roleDice} dicevalue={dicevalue} />  }
            {dicevalue === 2 && <Two  roleDice={roleDice}  dicevalue={dicevalue}/> }
            {dicevalue === 3 && <Three  roleDice={roleDice} dicevalue={dicevalue}/>  }
            {dicevalue === 4 && <Four  roleDice={roleDice} dicevalue={dicevalue}/>  }
            {dicevalue === 5 && <Five  roleDice={roleDice} dicevalue={dicevalue}/>  }
            {dicevalue === 6 && <Six  roleDice={roleDice} dicevalue={dicevalue}/>  }
             
             
        </div>
    );
}

export default App;
