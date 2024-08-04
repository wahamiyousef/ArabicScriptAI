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

          /*
          display: 'block',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
          */
        }}>

        <div style={{ display:'flex', flexDirection: 'row', gap: '50px' }}>
          <Letter />
          <Streak />
        </div>
        <Canvas lang="ara"/>
      </div>

    </div>
  );
}

export default Arabic;
