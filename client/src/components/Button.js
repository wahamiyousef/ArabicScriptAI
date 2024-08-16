import { useState } from 'react';
import React from 'react';
import '../index.css'

const Button = ({ children, link, onClick, variant = 'primary' }) => {
  const [hover, setHover] = useState(false);

  const defaultStyles = {
    textDecoration: 'none',
    padding: '7px 10px',
    borderRadius: '4px',
    borderTop: '1px solid #CCCCCC',
    borderRight: '1px solid #333333',
    borderBottom: '1px solid #333333',
    borderLeft: '1px solid #CCCCCC',
    border: '1px solid #000000',
    cursor: 'pointer',
    color: '#333333',
  };


  const styles = {
    primary: {
      // light mode
      backgroundColor: hover ? '#C6C6C6' : '#EEEEEE',
      //color: 'black'
    },
    secondary: {
      // dark mode
      backgroundColor: hover ? '#141414' : '#1E1E1E',
      color: '#DDDDDD',
      //border: '1px solid white',
    },
    clear: {
      backgroundColor: hover ? '#E58D00' : '#FFA500',
      color: '#111111'
    },
    submit: {
      backgroundColor: hover ? '#49CC6C' : '#50E379',
      color: '#111111'
    },
    cancel: {
      backgroundColor: hover ? '#E51926' : '#FF1C2B',
      color: '#111111'
    },
  };

  const combinedStyle = { ...defaultStyles, ...styles[variant] };

  return (
    <a 
      onClick={onClick}
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={combinedStyle}>
      {children}
    </a>
  );
};

export default Button;