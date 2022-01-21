import React, { useState, useEffect } from 'react';

import Button from './components/Button';
import CounterText from './components/CounterText';
import Input from './components/Input';

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

//1. Changed Class declaration to function declaration
//2. Replace the use of state with hooks
//3. Replace 'this' instances with the corresponding functional thing
//4. Remove render

function App() {
  const [countDown, setCountDown] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  const handleOnChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleClick = (receivedValue) => {
    if (receivedValue === '+') {
      setCountDown(Number(countDown) + Number(inputValue));
    } else {
      setCountDown(Number(countDown) - Number(inputValue));
    }

    //TODO: Refactorizar esto (con la validacion)
    //TODO: Resolve logic issue on if/else if/else
    // if (
    //   receivedValue === '+' &&
    //   Number(inputValue) + Number(countDown) <= 100
    // ) {
    //   this.setState({
    //     countDown: Number(countDown) + Number(inputValue),
    //   });
    // } else if (
    //   receivedValue === '-' &&
    //   Number(countDown) - Number(inputValue) >= 0
    // ) {
    //   this.setState({
    //     countDown: Number(countDown) - Number(inputValue),
    //   });
    // } else {
    //   alert('Operador invalido');
    // }
  };

  return (
    <div>
      {/* TODO:Agregar propTypes a todos los componentes */}

      <Button color='lightblue' onClick={() => handleClick('-')}>
        -
      </Button>

      <CounterText>{countDown}</CounterText>

      <Button color='red' onClick={() => handleClick('+')}>
        +
      </Button>

      <br />
      <br />

      <Input handleOnChange={handleOnChange} value={inputValue} />
    </div>
  );
}

export default App;
