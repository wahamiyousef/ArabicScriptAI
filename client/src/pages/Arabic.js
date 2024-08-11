import Canvas from '../components/Canvas';
import Letter from '../components/Letter';
import Header from '../components/Header';
import Streak from '../components/Streak';
import React from 'react';
import { useState } from 'react';

function Arabic() {
  const [letter, setLetter] = useState('');
  console.log('l:' + letter);
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
          <Letter onLetterChange={setLetter}/>
          <Streak />
        </div>
        <Canvas lang='arabic' correctLetter={letter}/>
      </div>

    </div>
  );
}

export default Arabic;
