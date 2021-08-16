import BookMarkFill from '../../assets/BookMarkBorderGrey.svg';
import BookMarkGreyFill from '../../assets/BookMarkGreyFill.svg';
import './Card.scss';

const Card = (props) => {
  const onAddCharacterHandler = (character) => {
    props.onAddCharacter(character);
  };

  return (
    <div className='card-container'>
      <img
        src={props.isSelected ? BookMarkGreyFill : BookMarkFill}
        alt=''
        className='add-to-fav-btn'
        onClick={onAddCharacterHandler.bind(null, props.character)}
      />
      <div className={`card__img-section ${props.classes}`}>
        <div
          className='img'
          style={{ backgroundImage: `url(${props.character.image})` }}
        ></div>
      </div>
      <div className='card__infos-section'>
        <p className='header'>VIVO / ESTUDIANTE</p>
        <h2 className='profile-name'>{props.character.name}</h2>
        <div className='card__infos-section__desc'>
          <div>
            <span>Cumpleaños: </span>
            <span>{props.character.dateOfBirth}</span>
          </div>
          <div>
            <span>Género: </span>
            <span>{props.character.gender}</span>
          </div>
          <div>
            <span>Color de ojos: </span>
            <span>{props.character.eyeColour}</span>
          </div>
          <div>
            <span>Color de pelo: </span>
            <span>{props.character.hairColour}</span>
          </div>
        </div>
        <div className='card-footer-mobile'>
          <p>VIVO ESTUDIANTE</p>
          <img
            src={props.isSelected ? BookMarkGreyFill : BookMarkFill}
            alt=''
            onClick={onAddCharacterHandler.bind(null, props.character)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
