import './App.css';
import React from 'react';
import Button from './components/Button'

function App() {

  return (
    <div 
      style={{
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>

      <h1>FRONT PAGE</h1>
      <Button link="/arabic">
        Arabic
      </Button>
      <Button link="/english">
        Eng
      </Button>
    </div>
  );
}

export default App;
