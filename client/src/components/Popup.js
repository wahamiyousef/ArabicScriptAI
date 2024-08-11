import React from 'react';
import Button from './Button';

function Popup({ isOpen, onClose, variant }) {
  let title = '';
  let buttonText = '';

  if (variant === 'correct') {
    title = 'Good job!';
    buttonText = 'Continue';
  } else if (variant === 'wrong') {
    title = 'Incorrect!';
    buttonText = 'Try again';
  }

  console.log('Popup rendered with variant:', variant, 'isOpen:', isOpen);

  return (
    <div
      style={{
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(128, 128, 128, .4)',
      }}>
      <dialog open={isOpen}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translate(0, -50%)',
          textAlign: 'center',
        }}>
        <h2>{title}</h2>
        <Button onClick={onClose}>{buttonText}</Button>
      </dialog>
    </div>
    
  );
}

export default Popup;
