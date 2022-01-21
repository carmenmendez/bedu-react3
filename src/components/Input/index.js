import React from 'react';

//Controlled component
// A input that depends of a changing state
export default function Input({ handleOnChange, value }) {
  const handleAction = (e) => {
    //Rename destructuring variables
    const { value: eventValue } = e.target;

    handleOnChange(eventValue);
  };

  return (
    <input
      type='number'
      value={value}
      // onChange={(e) => handleAction(e)}
      onChange={handleAction}
    />
  );
}
