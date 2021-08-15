import './Card.css';

const Card = props => {
	return (
		<div className="card-container">
			<div className="card__img-section">
				<img src={props.profile_image} alt="profile image" />
			</div>
			<div className="card__infos-section">
				<p>VIVO / ESTUDIANTE</p>
				<h5>Harry Potter</h5>
				<div className="card__infos-section__desc">
					<div>
						<span>Cumpleaños: </span>
						<span>31-07-1980</span>
					</div>
					<div>
						<span>Género: </span>
						<span>Male</span>
					</div>
					<div>
						<span>Color de ojos: </span>
						<span>Green</span>
					</div>
					<div>
						<span>Color de pelo: </span>
						<span>Black</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;