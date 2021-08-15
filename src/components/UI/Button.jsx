import "./Button.css";

const Button = props => {
	return (
		<button className="ui-button">
			{props.label}
		</button>
	);
};

export default Button;