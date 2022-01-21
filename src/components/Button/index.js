import PropTypes from 'prop-types';

//TODO: Change from function to class
export default function Button({ color = 'gray', children, onClick }) {
  return (
    <button onClick={onClick} type='button' style={{ color }}>
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

// export default Button
