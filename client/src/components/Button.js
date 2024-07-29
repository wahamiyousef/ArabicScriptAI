import { useState } from 'react';
import React from 'react';
import '../index.css'

const Button = ({ children, link, onClick}) => {
  const [hover, setHover] = useState(false);

  const styles = {
    primary: {
      textDecoration: 'none',
      backgroundColor: hover ? '#DDDDDD' : '#EEEEEE', 
      color: '#333333',
      padding: '7px 10px 7px 10px',
      borderRadius: '4px',

      borderTop: '1px solid #CCCCCC',
      borderRight: '1px solid #333333',
      borderBottom: '1px solid #333333',
      borderLeft: '1px solid #CCCCCC',
      border: '1px solid #000000',
      cursor: 'pointer',
    }
  }
  return (
    <a 
      onClick={onClick}
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={styles.primary}>
      {children}
    </a>
  );
};

export default Button;