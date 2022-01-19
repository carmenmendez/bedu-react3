import React from 'react';

//Controlled component
// A input that depends of a changing state
export default function Input({ handleOnChange, value }) {
  return (
    <input
      type='number'
      value={value}
      // TODO:Pasar esto a un metodo en lugar de que este aqui en una arrow function
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
}
