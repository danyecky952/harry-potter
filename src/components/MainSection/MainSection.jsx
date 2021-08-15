import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './MainSection.scss';
import Button from '../UI/Button';
import Card from '../UI/Card';
import StudentsData from '../../data/hp-students.json';
import StaffsData from '../../data/hp-staff.json';

const getAppropriateClass = (house, alive) => {
  let classes = 'normal';
  if (house === 'Slytherin') classes = 'Slytherin';
  else if (house === 'Ravenclaw') classes = 'Ravenclaw';
  else if (house === 'Hufflepuff') classes = 'Hufflepuff';
  if (alive === false) classes = 'dead';
  return classes;
};

const MainSection = (_) => {
  const dispatch = useDispatch();

  const [showStudentORStaff, setShowStudentORStaff] = useState(true);

  const addCharacterTOFavHandler = (character) => {
    dispatch({ type: 'ADD_CHARACTER', character: character });
  };

  const StudentsCards = StudentsData.map((student, index) => {
    const classes = getAppropriateClass(student.house, student.alive);
    return (
      <Card
        key={index * 15}
        character={student}
        classes={classes}
        onAddCharacter={addCharacterTOFavHandler}
      />
    );
  });

  const StaffsCards = StaffsData.map((staff, index) => {
    const classes = getAppropriateClass(staff.house, staff.alive);
    return (
      <Card
        key={index * 19}
        character={staff}
        classes={classes}
        onAddCharacter={addCharacterTOFavHandler}
      />
    );
  });

  const showStudent = (_) => {
    setShowStudentORStaff(true);
  };

  const showStaff = (_) => {
    setShowStudentORStaff(false);
  };

  return (
    <>
      <div className='staff-edtudiants-buttons'>
        <Button label='ESTUDIANTES' onClick={showStudent} />
        <Button label='STAFF' onClick={showStaff} />
      </div>
      <div className='main-section-container'>
        {showStudentORStaff && StudentsCards}
        {!showStudentORStaff && StaffsCards}
      </div>
    </>
  );
};

export default MainSection;
