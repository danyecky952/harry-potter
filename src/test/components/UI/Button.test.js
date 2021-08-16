import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/UI/Button';
import '@testing-library/jest-dom';

describe('Prubeas en <Button />', () => {
  const wrapper = shallow(<Button />);
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener la clase ui-button', () => {
    const button = wrapper.find('button');

    expect(button.prop('className')).toBe('ui-button ');
  });
});
