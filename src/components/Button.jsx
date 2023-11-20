import React from 'react';

const Button = ({ disabled, onClick, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border p-2 m-2 w-[200px] rounded-md ${
        disabled ? 'bg-gray-300' : 'bg-purple-500 text-white'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;