import React from 'react';

//Controlled component
// A input that depends of a changing state
export default class Input extends React.Component {
  handleAction = (e) => {
    //Rename destructuring variables
    const { value: eventValue } = e.target;
    const { handleOnChange } = this.props;

    handleOnChange(eventValue);
  };

  render() {
    const { value } = this.props;

    return <input type='number' value={value} onChange={this.handleAction} />;
  }
}
