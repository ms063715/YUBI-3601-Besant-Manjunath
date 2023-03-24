import React, { useState } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import './App.css';

function App() {
  const [screen, setScreen] = useState(1);
  const [data, setData] = useState([]);

  const handleScreen1Submit = (input) => {
    setData(input);
    setScreen(2);
  };

  const handleScreen2Submit = (input) => {
    setData({ ...data, ...input });
    setScreen(3);
  };

  return (
    <div className="App">
      {screen === 1 && <Screen1 onSubmit={handleScreen1Submit} />}
      {screen === 2 && <Screen2 onSubmit={handleScreen2Submit} />}
      {screen === 3 && <Screen3 data={[data]} />}
    </div>
  );
}

export default App;
