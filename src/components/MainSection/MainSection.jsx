import './MainSection.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ProfileImage from '../../assets/profile_pic.png';

const MainSection = _ => {
	return (
		<>
			<div className="staff-edtudiants-buttons">
				<Button label="ESTUDIANTES" />
				<Button label="STAFF" />
			</div>
			<div className="main-section-container">
				<Card profile_image={ProfileImage} />
			</div>
		</>
	);
};

export default MainSection;