import React from 'react';

import Button from './components/Button';
import CounterText from './components/CounterText';
import Input from './components/Input';

//COMPONENTS:
// Button
// props: backgroundColor, text
// Input
// Use state

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }
class App extends React.Component {
  //For using React Refs
  //For using event listeners
  constructor(props) {
    super(props);

    console.log('constructor');

    this.state = {
      countDown: 1,
      inputValue: 1,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  handleOnChange = (inputValue) => {
    // let finalValue = inputValue;

    // if (+inputValue < 1) finalValue = 1;
    // if (Number(inputValue) > 100) finalValue = 100;

    this.setState({ inputValue });
  };

  handleSum = () => {
    this.setState({
      countDown: Number(this.state.countDown) + Number(this.state.inputValue),
    });
  };

  handleRest = () => {
    this.setState({
      countDown: Number(this.state.countDown) - Number(this.state.inputValue),
    });
  };

  render() {
    console.log('this.state: ', this.state);
    const { countDown, inputValue } = this.state;

    return (
      <div>
        <Button onClick={this.handleRest} text='-' />
        <CounterText>{countDown}</CounterText>
        <Button onClick={this.handleSum} text='+' />

        <br />
        <br />

        <Input handleOnChange={this.handleOnChange} value={inputValue} />
      </div>
    );
  }
}

export default App;
