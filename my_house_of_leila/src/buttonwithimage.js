import React from 'react';

function ButtonWithImage({ text, imageSrc, onClick }) {
  const buttonStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '300px',
    height: '200px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
    color: '#fff',
    fontSize: '24px',
    opacity: '0.8',
    textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonWithImage;

