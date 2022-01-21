import React from 'react';

//TODO: Change from class to function
export default class CounterText extends React.Component {
  render() {
    return <>{this.props.children}</>;
  }
}
