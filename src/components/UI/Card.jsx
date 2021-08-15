import BookMarkFill from '../../assets/BookMarkBorderGrey.svg';
import './Card.scss';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={BookMarkFill} alt='' className='add-to-fav-btn' />
      <div className={`card__img-section ${props.classes}`}>
        <div
          className='img'
          style={{ backgroundImage: `url(${props.profileImage})` }}
        ></div>
      </div>
      <div className='card__infos-section'>
        <p className='header'>VIVO / ESTUDIANTE</p>
        <h2>{props.name}</h2>
        <div className='card__infos-section__desc'>
          <div>
            <span>Cumpleaños: </span>
            <span>{props.dateOfBirth}</span>
          </div>
          <div>
            <span>Género: </span>
            <span>{props.gender}</span>
          </div>
          <div>
            <span>Color de ojos: </span>
            <span>{props.eyeColour}</span>
          </div>
          <div>
            <span>Color de pelo: </span>
            <span>{props.hairColour}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
