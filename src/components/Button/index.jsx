import P from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
