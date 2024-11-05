import './numberSelector.css';

const NumberSelector = ({dicevalue, handleNumber, selectedNumber,score ,isClicked}) => {
     
    return (
        <div className="numberSelector">
            <div className="totalscore">
                <h1>Score</h1>
                <p>{score}</p>
            </div>

            <div className="select">
                <div className="selectnumber">
                    <div className={`box ${selectedNumber===1 && isClicked? 'dark':''}  `} onClick= {()=>handleNumber(1)} >
                        1
                    </div>
                    <div className={`box ${selectedNumber===2 && isClicked? 'dark':''}  `} onClick= {()=>handleNumber(2)}>
                        2
                    </div>
                    <div className={`box  ${selectedNumber===3 && isClicked? 'dark':''}  `} onClick= {()=>handleNumber(3)}>
                        3
                    </div>
                    <div className={`box ${selectedNumber===4 && isClicked? 'dark':''}  `} onClick= {()=>handleNumber(4)}>
                        4
                    </div>
                    <div className={`box ${selectedNumber===5 && isClicked? 'dark':''}  `} onClick= {()=>handleNumber(5)}>
                        5
                    </div>
                    <div className={`box ${selectedNumber===6 && isClicked? 'dark':''}  `} onClick= {()=>handleNumber(6)}>
                        6
                    </div>
                </div>
                <p>Select Number</p>
               
            </div>
        </div>
    );
};

export default NumberSelector;
