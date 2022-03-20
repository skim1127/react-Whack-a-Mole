import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
  // instantiate State variables
  let [score, setScore] = useState(0)

  // creating a for loop
  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer 
        key={i}
        setScore={setScore}
        score={score}
        />
      )
    }

    return(
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React a Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
