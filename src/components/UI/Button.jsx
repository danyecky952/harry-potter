import './Button.scss';

const Button = (props) => {
  const onClickHandler = (_) => {
    props.onClick();
  };

  return (
    <button
      className={`ui-button ${props.active ? 'active' : ''}`}
      onClick={onClickHandler}
    >
      {props.label}
    </button>
  );
};

export default Button;
