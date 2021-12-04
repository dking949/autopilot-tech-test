import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CountryInput from '../components/CountryInput';

const dummyInputProps = {
  onChange: jest.fn( () => alert('onChange triggered')),
  userInput: 'Test User Input',
  onFocus: jest.fn( () => alert('onFocus triggered')),
}

test('renders an input component', () => {
  render(<CountryInput
    onChange={dummyInputProps.onChange}
    userInput={dummyInputProps.userInput}
    onFocus={dummyInputProps.onFocus}
    />);
  const input = screen.getByLabelText('country-input');
  expect(input).toBeInTheDocument();
});

test('renders a chevron icon in the component', () => {
  render(<CountryInput
    onChange={dummyInputProps.onChange}
    userInput={dummyInputProps.userInput}
    onFocus={dummyInputProps.onFocus}
    />);
  const input = screen.getByLabelText('dropdown-chevron');
  expect(input).toBeInTheDocument();
})

test('component has correct placeholder text', () => {
  render(<CountryInput
    onChange={dummyInputProps.onChange}
    userInput={dummyInputProps.userInput}
    onFocus={dummyInputProps.onFocus}
    />);
  const input = screen.getByPlaceholderText('Search');
  expect(input).toBeInTheDocument();
});

test('when focused, the onFocus callback is triggered', () => {
  render(<CountryInput
    onChange={dummyInputProps.onChange}
    userInput={''}
    onFocus={dummyInputProps.onFocus}
    />);
  const input = screen.getByLabelText('country-input');

  input.focus();
  expect(dummyInputProps.onFocus).toHaveBeenCalledTimes(1);
});

test('when user enters input, the onChange callback is triggered', () => {
  render(<CountryInput
    onChange={dummyInputProps.onChange}
    userInput={''}
    onFocus={dummyInputProps.onFocus}
    />);
  const input: any = screen.getByLabelText('country-input');

  fireEvent.change(input, {target: {value: 'ABC'}});
  expect(dummyInputProps.onChange).toHaveBeenCalledTimes(1);
});
