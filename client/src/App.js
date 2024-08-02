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
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center', justifyContent: 'center' }}>
        <Button link="/arabic">
          Arabic
        </Button>
        <Button link="/english">
          English
        </Button>
      </div>
    </div>
  );
}

export default App;
