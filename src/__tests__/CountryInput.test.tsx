import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import CountryInput from '../components/CountryInput';

test('renders an input component', () => {
  render(<CountryInput />);
  const input = screen.getByLabelText('country-input');
  expect(input).toBeInTheDocument();
});

test('component has correct placeholder text', () => {
  render(<CountryInput />);
  const input = screen.getByPlaceholderText('Search');
  expect(input).toBeInTheDocument();
});

test('when focused, the border is blue', () => {
  render(<CountryInput />);
  const input = screen.getByLabelText('country-input');

  fireEvent(
    input,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(input).toHaveStyle('border: 1px solid blue');
});