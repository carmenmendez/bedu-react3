import React from 'react';

import Button from './components/Button';
import CounterText from './components/CounterText';
import Input from './components/Input';

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }
class App extends React.Component {
  //For using React Refs
  //For using event listeners
  // constructor(props) {
  //   super(props);

  //   console.log('constructor');

  //   this.state = {
  //     countDown: 1,
  //     inputValue: 1,
  //   };
  // }

  // TODO: Completar el state faltante aqui
  state = {};

  componentDidMount() {
    console.log('componentDidMount');
  }

  handleOnChange = (inputValue) => {
    // let finalValue = inputValue;

    // if (+inputValue < 1) finalValue = 1;
    // if (Number(inputValue) > 100) finalValue = 100;

    this.setState({ inputValue });
  };

  //TODO: Usar una sola funcion en lugar de handleSum y handleRest
  //TODO: Agregar validacion a esa funcion (la validacion que tenemos en handleOnChange)
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
        {/* TODO:Agregar propTypes a todos los componentes */}

        {/* TODO:Cambiar el color del texto de este Button */}
        <Button onClick={this.handleRest} text='-' />

        <CounterText>{countDown}</CounterText>

        {/* //TODO: Usar children en lugar de text (en este componente de button) */}
        {/* TODO:Cambiar el color del texto de este Button */}
        <Button onClick={this.handleSum} text='+' />

        <br />
        <br />

        <Input handleOnChange={this.handleOnChange} value={inputValue} />
      </div>
    );
  }
}

export default App;
