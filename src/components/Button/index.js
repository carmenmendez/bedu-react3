import PropTypes from 'prop-types';

export default function Button({ color = 'gray', text = '', onClick }) {
  return (
    <button onClick={onClick} type='button' style={{ color }}>
      {text}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

// export default Button
