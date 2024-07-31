import { useState } from 'react';
import React from 'react';
import Button from './Button';
import HeaderButton from './HeaderButton';

const Header = () => {
  const styles = {
    link: {
      width: '98%',
      backgroundColor: '#48B2E0',
      font: 'bold 18px Atkinson Hyperlegible',
      textDecoration: 'none', 
      color: '#000',
      padding: '15px 0% 15px 2%',
    },
  };
  
  return (
    <div
      style={styles.link}>
      <div style={{ display: 'inline-block', width:'120px' }}>
        ArabicScriptAI
      </div>
      

      <div style={{ marginLeft: '60px', display: 'inline-block', width:'200px' }}>
        <HeaderButton link='/'>
          Home
        </HeaderButton>
        <HeaderButton link='/about'>
          About
        </HeaderButton>
      </div>

    </div>
      
  );
};

export default Header;