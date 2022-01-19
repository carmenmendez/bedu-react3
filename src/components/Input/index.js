import React from 'react';

//Controlled component
// A input that depends of a changing state
export default function Input({ handleOnChange, value }) {
  return (
    <input
      type='number'
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
}
