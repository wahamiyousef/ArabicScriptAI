import React from 'react';
import Button from './Button';

function Popup({ isOpen, onClose, variant }) {
  let title = '';
  let buttonText = '';
  let buttonVariant = '';

  if (variant === 'correct') {
    title = 'Correct!';
    buttonText = 'Continue';
    buttonVariant = 'submit';
  } else if (variant === 'wrong') {
    title = 'Incorrect!';
    buttonText = 'Try again';
    buttonVariant = 'cancel';
  }

  console.log('Popup rendered with variant:', variant, 'isOpen:', isOpen);

  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(128, 128, 128, .4)',
        content: '',

        /*
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(128, 128, 128, .4)',
        */
      }}>
      <dialog open={isOpen}
        style={{
          display: 'flex',
          flexDirection: 'column',
          top: '50%',
          transform: 'translate(0, -50%)',
          textAlign: 'center',

          paddingBlock: '30px',
          paddingInline: '80px',
          position: 'absolute',
          rowGap: '20px',

          border: 'none',
          borderRadius: '20px',
        }}>
        <h2>{title}</h2>
        <Button variant={buttonVariant} onClick={onClose}>{buttonText}</Button>
      </dialog>
    </div>
    
  );
}

export default Popup;
