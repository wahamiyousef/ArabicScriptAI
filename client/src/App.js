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
      {/*<h1 style={{textAlign: 'center'}}>Write the letter 'alif'</h1>*/}

      {/*<Letter />
      <Canvas />*/}
      <h1>FRONT PAGE</h1>
      <Button link="/arabic">
        Arabic
      </Button>
      <Button link="/english">
        Eng
      </Button>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
