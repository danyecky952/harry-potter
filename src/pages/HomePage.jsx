import TopHeader from '../components/TopHeader/TopHeader';
import './HomePage.scss';
import MainSection from '../components/MainSection/MainSection';

const HomePage = (_) => {
  return (
    <div className='home-page'>
      <TopHeader />
      <MainSection />
    </div>
  );
};

export default HomePage;
