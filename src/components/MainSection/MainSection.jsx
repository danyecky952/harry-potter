import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const favoritesCharacters = useSelector((state) => state.characters);

  const [showStudentORStaff, setShowStudentORStaff] = useState(true);

  const addCharacterTOFavHandler = (character) => {
    dispatch({ type: 'ADD_CHARACTER', character: character });
  };

  const StudentsCards = StudentsData.map((student, index) => {
    let classes = getAppropriateClass(student.house, student.alive);

    const alreadySelected = favoritesCharacters.findIndex(
      (character) => character.name === student.name
    );

    if (alreadySelected !== -1) classes = 'Hufflepuff';

    return (
      <Card
        key={index * 15}
        isSelected={alreadySelected !== -1}
        character={student}
        classes={classes}
        onAddCharacter={addCharacterTOFavHandler}
      />
    );
  });

  const StaffsCards = StaffsData.map((staff, index) => {
    let classes = getAppropriateClass(staff.house, staff.alive);

    const alreadySelected = favoritesCharacters.findIndex(
      (character) => character.name === staff.name
    );

    if (alreadySelected !== -1) classes = 'Hufflepuff';

    return (
      <Card
        key={index * 19}
        isSelected={alreadySelected !== -1}
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
        <Button
          label='ESTUDIANTES'
          onClick={showStudent}
          active={showStudentORStaff ? true : false}
        />
        <Button
          label='STAFF'
          onClick={showStaff}
          active={!showStudentORStaff ? true : false}
        />
      </div>
      <div className='main-section-container'>
        {showStudentORStaff && StudentsCards}
        {!showStudentORStaff && StaffsCards}
      </div>
    </>
  );
};

export default MainSection;
