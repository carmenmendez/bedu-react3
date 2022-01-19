import PropTypes from 'prop-types';

//TODO:Usar children en lugar de text
export default function Button({ color = 'gray', text = '', onClick }) {
  return (
    <button onClick={onClick} type='button' style={{ color }}>
      {text}
    </button>
  );
}

//TODO:Agregar propTypes faltante
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

// export default Button
