import { useState } from 'react';
import React from 'react';
import Button from './Button';
import HeaderButton from './HeaderButton';

const Header = () => {
  const styles = {
    link: {
      width: '98%',
      backgroundColor: '#48B2E0',
      font: 'bold 11px Arial',
      textDecoration: 'none', 
      color: '#333333',
      padding: '15px 0% 15px 2%',

      //borderBottom: '2px solid #000000',


    },
  };
  
  return (
    <div
      style={styles.link}>
      ARABICSCRIPTAI

      <HeaderButton link='/'>
        Home
      </HeaderButton>
    </div>
  );
};

export default Header;