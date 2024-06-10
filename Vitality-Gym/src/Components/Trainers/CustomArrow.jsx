import styles from './Trainers.module.css'
import React from 'react';

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'white',
        display: 'block',
        background: 'gray',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {direction === 'left' ? '<' : '>'}
    </div>
  );
};

export default CustomArrow;
