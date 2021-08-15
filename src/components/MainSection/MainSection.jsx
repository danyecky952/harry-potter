import { useState } from 'react';
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
  const [showStudentORStaff, setShowStudentORStaff] = useState(true);

  const StudentsCards = StudentsData.map((student) => {
    const classes = getAppropriateClass(student.house, student.alive);

    return (
      <Card
        name={student.name}
        gender={student.gender}
        eyeColour={student.eyeColour}
        profileImage={student.image}
        hairColour={student.hairColour}
        dateOfBirth={student.dateOfBirth}
        classes={classes}
      />
    );
  });

  const StaffsCards = StaffsData.map((staff) => {
    const classes = getAppropriateClass(staff.house, staff.alive);
    return (
      <Card
        name={staff.name}
        gender={staff.gender}
        eyeColour={staff.eyeColour}
        profileImage={staff.image}
        hairColour={staff.hairColour}
        dateOfBirth={staff.dateOfBirth}
        classes={classes}
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
