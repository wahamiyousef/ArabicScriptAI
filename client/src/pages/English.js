import Canvas from '../components/Canvas';
import EnglishWords from '../components/EnglishWords';
import Header from '../components/Header';
import Streak from '../components/Streak';
import React from 'react';

function English() {
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
          <EnglishWords />
          <Streak />
        </div>
        <Canvas lang="eng"/>
      </div>

    </div>
  );
}

export default English;
