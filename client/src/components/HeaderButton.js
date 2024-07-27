import { useState } from 'react';
import React from 'react';

const HeaderButton = ({ children, link, onClick}) => {
  const [hover, setHover] = useState(false);

  const styles = {
    link: {
      font: 'bold 11px Arial',
      textDecoration: 'none',
      backgroundColor: hover ? '#000000' : '#EEEEEE', 
      color: '#333333',
      padding: '7px 10px 7px 10px',
      borderRadius: '4px',
      marginLeft: '60px',

      borderTop: '1px solid #CCCCCC',
      borderRight: '1px solid #333333',
      borderBottom: '1px solid #333333',
      borderLeft: '1px solid #CCCCCC',
      border: '1px solid #000000',
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