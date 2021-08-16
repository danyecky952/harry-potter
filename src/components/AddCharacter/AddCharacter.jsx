import { useState } from 'react';
import './AddCharacter.scss';
import Modal from '../UI/Modal';
import CloseIcon from '../../assets/CloseIcon.svg';
import Button from '../UI/Button';

const AddCharacter = (props) => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [gender, setGender] = useState('Mujer');
  const [studentOrStaff, setStudentOrStaff] = useState('Estudiante');

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/characters', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        dateOfBirth: birthday,
        eyeColour: eyeColor,
        hairColour: hairColor,
        gender: gender,
        hogwartsStudent: studentOrStaff === 'Estudiante',
        hogwartsStaff: studentOrStaff === 'Staff',
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Modal onClose={props.onClose}>
      <form className='modal-container' onSubmit={onSubmitFormHandler}>
        <div className='header'>
          <h2>Agrega un personaje </h2>
          <img src={CloseIcon} alt='' onClick={props.onClose} />
        </div>
        <div className='inputs-grp'>
          <div className='input'>
            <label htmlFor='name'>NOMBRE</label>
            <input
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='input'>
            <label htmlFor='birthday'>CUMPLEAÑOS</label>
            <input
              type='date'
              name='birthday'
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
        </div>
        <div className='inputs-grp'>
          <div className='input'>
            <label htmlFor='eyeColor'>COLOR DE OJOS</label>
            <input
              type='text'
              name='eyeColor'
              onChange={(e) => setEyeColor(e.target.value)}
            />
          </div>
          <div className='input'>
            <label htmlFor='hairColor'>COLOR DE PELO</label>
            <input
              type='text'
              name='hairColor'
              onChange={(e) => setHairColor(e.target.value)}
            />
          </div>
        </div>
        <div className='inputs-grp'>
          <div className='input radio'>
            <p>GÉNERO</p>
            <input
              type='radio'
              name='gender'
              defaultChecked={gender === 'Mujer'}
              onClick={() => setGender('Mujer')}
            />
            <label htmlFor='eyeColor' className='first-label'>
              Mujer
            </label>
            <input
              type='radio'
              name='gender'
              defaultChecked={gender === 'Hombre'}
              onClick={() => setGender('Hombre')}
            />
            <label htmlFor='eyeColor'>Hombre</label>
          </div>
          <div className='input radio'>
            <p>POSICIÓN</p>
            <input
              type='radio'
              name='position'
              defaultChecked={studentOrStaff === 'Estudiante'}
              onClick={() => setStudentOrStaff('Estudiante')}
            />
            <label htmlFor='eyeColor' className='first-label'>
              Estudiante
            </label>
            <input
              type='radio'
              name='position'
              defaultChecked={studentOrStaff === 'Staff'}
              onClick={() => setStudentOrStaff('Staff')}
            />
            <label htmlFor='eyeColor'>Staff</label>
          </div>
        </div>
        <div className='photography-btn'>
          <p className=''>FOTOGRAFIA (input type file)</p>
          <Button label='GUARDAR' onClick={(_) => {}} />
        </div>
      </form>
    </Modal>
  );
};

export default AddCharacter;
