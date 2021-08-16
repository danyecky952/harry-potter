import './TopHeader.scss';
import BookMarkFill from '../../assets/BookMarkFill.svg';
import UserFill from '../../assets/UserFill.svg';
import HarryPotter from '../../assets/HarryPotter.svg';
import RemoveIcon from '../../assets/RemoveIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import AddCharacter from '../AddCharacter/AddCharacter';

const TopHeader = (_) => {
  const dispatch = useDispatch();

  const [showFavorites, setShowFavorites] = useState(false);
  const [showAddCharacter, setShowAddCharacter] = useState(false);

  const favoritesCharacters = useSelector((state) => state.characters);

  const showFavoritesHandler = (_) => {
    setShowFavorites((prevState) => !prevState);
  };

  const onRemoveHandler = (name) => {
    dispatch({ type: 'REMOVE_CHARACTER', name: name });
  };

  const favoritesList = favoritesCharacters.map((character, index) => {
    if (index > 4) return;
    return (
      <>
        <li>
          <img className='fav-char-img' src={character.image} alt='' />
          <p>{character.name}</p>
          <img
            className='remove-icon'
            src={RemoveIcon}
            alt=''
            onClick={onRemoveHandler.bind(null, character.name)}
          />
        </li>
        <hr />
      </>
    );
  });

  const showAddCharacterHandler = (_) => {
    setShowAddCharacter(true);
  };

  const onCloseAddCharacterHandler = (_) => {
    setShowAddCharacter(false);
  };

  return (
    <>
      {showAddCharacter && (
        <AddCharacter onClose={onCloseAddCharacterHandler} />
      )}
      <div className='top-header-container'>
        {showFavorites && (
          <ul className='favorite-charaters-list mobile-version'>
            {favoritesList}
          </ul>
        )}
        <span
          className='top-header-container__favoritos'
          onClick={showFavoritesHandler}
        >
          <span>FAVORITOS</span>
          <img src={BookMarkFill} alt='' />
        </span>
        <span
          className='top-header-container__agregar'
          onClick={showAddCharacterHandler}
        >
          <span>AGREGAR</span>
          <img src={UserFill} alt='' />
        </span>
        {showFavorites && (
          <ul className='favorite-charaters-list desktop-version'>
            {favoritesList}
          </ul>
        )}
      </div>
      <div className='harry-logo-and-text-section'>
        <img src={HarryPotter} alt='' />
        <p className='selection'>Selecciona tu filtro</p>
      </div>
    </>
  );
};

export default TopHeader;
