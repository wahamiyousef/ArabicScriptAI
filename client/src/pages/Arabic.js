import Canvas from '../components/Canvas';
import Letter from '../components/Letter';
import Header from '../components/Header';
import Streak from '../components/Streak';
import React from 'react';

function Arabic() {
  return (
    <div>
      <Header />
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <div style={{ display:'flex', flexDirection: 'row', gap: '50px' }}>
          <Letter />
          <Streak />
        </div>
        <Canvas lang='arabic'/>
      </div>

    </div>
  );
}

export default Arabic;
