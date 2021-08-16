import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainSection.scss';
import Button from '../UI/Button';
import Card from '../UI/Card';
import StudentsData from '../../data/hp-students.json';
import StaffsData from '../../data/hp-staff.json';
import CharactersData from '../../data/hp-characters.json';
import AddData from '../../data/data.json';
const getAppropriateClass = (house) => {
  let classes = 'normal';
  if (house === 'Slytherin') classes = 'Slytherin';
  else if (house === 'Ravenclaw') classes = 'Ravenclaw';
  else if (house === 'Hufflepuff') classes = 'Hufflepuff';

  return classes;
};

const MainSection = (_) => {
  const dispatch = useDispatch();

  const favoritesCharacters = useSelector((state) => state.characters);

  const [showStudentORStaff, setShowStudentORStaff] = useState('characters');
  // const [showCharacters, setShowCharecters] = useState([
  //   ...CharactersData,
  //   ...AddData.characters,
  // ]);

  const addCharacterTOFavHandler = (character) => {
    dispatch({ type: 'ADD_CHARACTER', character: character });
  };

  const CharacteresCards = CharactersData.map((characters, index) => {
    const classes = getAppropriateClass(characters.house);

    const alreadySelected = favoritesCharacters.findIndex(
      (character) => character.name === characters.name
    );

    return (
      <Card
        key={index * 15}
        isSelected={alreadySelected !== -1}
        character={characters}
        classes={classes}
        onAddCharacter={addCharacterTOFavHandler}
      />
    );
  });

  const StudentsCards = StudentsData.map((student, index) => {
    const classes = getAppropriateClass(student.house);

    const alreadySelected = favoritesCharacters.findIndex(
      (character) => character.name === student.name
    );

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
    const classes = getAppropriateClass(staff.house);

    const alreadySelected = favoritesCharacters.findIndex(
      (character) => character.name === staff.name
    );

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
    setShowStudentORStaff('student');
  };

  const showStaff = (_) => {
    setShowStudentORStaff('staff');
  };

  return (
    <>
      <div className='staff-edtudiants-buttons'>
        <Button
          label='ESTUDIANTES'
          onClick={showStudent}
          active={showStudentORStaff === 'student' ? true : false}
        />
        <Button
          label='STAFF'
          onClick={showStaff}
          active={showStudentORStaff === 'staff' ? true : false}
        />
      </div>
      <div className='main-section-container'>
        {showStudentORStaff === 'characters' && CharacteresCards}
        {showStudentORStaff === 'student' && StudentsCards}
        {showStudentORStaff === 'staff' && StaffsCards}
      </div>
    </>
  );
};

export default MainSection;
