import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import CountryInput from '../components/CountryInput';
import DropdownListItem from '../components/DropdownListItem';

test('renders an li component', () => {
  render(<DropdownListItem countryName={"Ireland"} countryFlag={"TODO"} />);
  const li = screen.getByLabelText('country-list-item');
  expect(li).toBeInTheDocument();
});

test('renders with the correct country name', () => {
  render(<DropdownListItem countryName={"Ireland"} countryFlag={"TODO"} />);
  const li = screen.getByText('Ireland');
  expect(li).toBeInTheDocument();
});

test('renders with the correct country flag', () => {
  render(<DropdownListItem countryName={"Ireland"} countryFlag={"TODO"} />);
  const li = screen.getByText('TODO');
  expect(li).toBeInTheDocument();
});