import Header from '../components/Header';
import React from 'react';

function ErrorPage() {
  return (
    <div>
      <Header />
    
      <div 
        style={{
          display: 'block',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>

        <h1>Uh oh, this page doesn't exist!</h1>
        <h3>404 Not Found</h3>
        
      </div>

    </div>
  );
}

export default ErrorPage;
