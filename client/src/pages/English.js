import Canvas from '../components/Canvas';
import Letter from '../components/Letter';
import React from 'react';

function English() {
  return (
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
  );
}

export default English;
