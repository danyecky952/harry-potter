import './Button.scss';

const Button = (props) => {
  const onClickHandler = (_) => {
    props.onClick();
  };

  return (
    <button className='ui-button' onClick={onClickHandler}>
      {props.label}
    </button>
  );
};

export default Button;
