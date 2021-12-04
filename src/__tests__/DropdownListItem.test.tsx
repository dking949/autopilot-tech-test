import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DropdownListItem from '../components/DropdownListItem';

const dummyLiProps = {
  countryName: "Narnia",
  countryFlag: "Dummy Flag",
  onClick: jest.fn(() => alert('onClick triggered')),
  countryIndex: 20,
}

test('renders an li component', () => {
  render(<DropdownListItem
    countryName={dummyLiProps.countryName}
    countryFlag={dummyLiProps.countryFlag}
    onClick={dummyLiProps.onClick}
    countryIdx={dummyLiProps.countryIndex}
    />);
  const li = screen.getByLabelText('country-list-item');
  expect(li).toBeInTheDocument();
});

test('renders with the correct country name & flag', () => {
  render(<DropdownListItem
    countryName={dummyLiProps.countryName}
    countryFlag={dummyLiProps.countryFlag}
    onClick={dummyLiProps.onClick}
    countryIdx={dummyLiProps.countryIndex}
    />);
  const flagSpan = screen.getByLabelText('country-flag-span');
  const nameSpan = screen.getByLabelText('country-name-span');

  expect(flagSpan).toBeInTheDocument();
  expect(nameSpan).toBeInTheDocument();
});

test('renders with the correct country index data attribute', () => {
  render(<DropdownListItem
    countryName={dummyLiProps.countryName}
    countryFlag={dummyLiProps.countryFlag}
    onClick={dummyLiProps.onClick}
    countryIdx={dummyLiProps.countryIndex}
    />);
  
  const li = screen.getByLabelText('country-list-item');
  const idxAttribute = li.getAttribute('data-country-index');
  let idx = undefined;
  // ParseInt won't allow idxAttribute as param as the data attribute is possibly undefined, so use if here
  if (idxAttribute) {
    idx = parseInt(idxAttribute);
  }

  expect(idx).toBeDefined();
  expect(idx).toBe(dummyLiProps.countryIndex);
});

test('when the li is clicked, the onClick callback is triggered', () => {
  render(<DropdownListItem
    countryName={dummyLiProps.countryName}
    countryFlag={dummyLiProps.countryFlag}
    onClick={dummyLiProps.onClick}
    countryIdx={dummyLiProps.countryIndex}
    />);
  const li = screen.getByLabelText('country-list-item');

  fireEvent(
    li,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(dummyLiProps.onClick).toHaveBeenCalledTimes(1);
});