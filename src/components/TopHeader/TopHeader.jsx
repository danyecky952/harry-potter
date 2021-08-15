import './TopHeader.scss';
import BookMarkFill from '../../assets/BookMarkFill.svg';
import UserFill from '../../assets/UserFill.svg';
import HarryPotter from '../../assets/HarryPotter.svg';

const TopHeader = (_) => {
  return (
    <>
      <div className='top-header-container'>
        <span className='top-header-container__favoritos'>
          <span>FAVORITOS</span>
          <img src={BookMarkFill} alt='' />
        </span>
        <span className='top-header-container__agregar'>
          <span>AGREGAR</span>
          <img src={UserFill} alt='' />
        </span>
      </div>
      <div className='harry-logo-and-text-section'>
        <img src={HarryPotter} alt='' />
        <p className='selection'>Selecciona tu filtro</p>
      </div>
    </>
  );
};

export default TopHeader;
