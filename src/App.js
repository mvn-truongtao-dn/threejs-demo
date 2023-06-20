import { useState } from 'react';
import Game from './components/Game';
import Loading from './components/Loading';
import './App.css';


function App() {
  const [isStart, setIsStart] = useState(false);
  return (
    <>
      {!isStart ? <Loading setIsStart={setIsStart} /> : <Game />}
    </>
  );
}

export default App;
