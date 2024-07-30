import { useState } from 'react';
import React from 'react';

const HeaderButton = ({ children, link, onClick}) => {
  const [hover, setHover] = useState(false);

  const styles = {
    link: {
      font: 'bold 14px Arial',
      textDecoration: 'none',
      backgroundColor: hover ? 'rgba(227, 220, 223, 0.2)' : 'rgba(0, 0, 0, 0)', 
      color: hover ? '#000' : '#333333',
      padding: '8px 10px 8px 10px',
      borderRadius: '4px',
      //marginLeft: '60px',

      //border: hover ? '1px solid #000': '1px',
    }
  }
  return (
    <a 
      onClick={onClick}
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={styles.link}>
      {children}
    </a>
  );
};

export default HeaderButton;