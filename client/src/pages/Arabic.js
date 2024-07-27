import Canvas from '../components/Canvas';
import Letter from '../components/Letter';
import Header from '../components/Header';
import React from 'react';

function Arabic() {
  return (
    <div>
      <Header />
    
      <div 
        style={{
          display: 'block',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
        
        <Letter />
        <Canvas />
      </div>
    </div>
  );
}

export default Arabic;
