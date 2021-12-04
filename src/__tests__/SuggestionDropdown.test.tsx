import React from 'react';
import { render, screen } from '@testing-library/react';
import SuggestionDropdown from '../components/SuggestionDropdown';
/*
countryData,
  onListItemClick,
  */

const dummyDropdownProps = {
  countryData: [
    {
      name: 'Brazil',
      flag: 'braFlag,'
    },
    {
      name: 'Argentina',
      flag: 'argFlag,'
    } 
  ],
  onLiClick: jest.fn(() => alert('li item clicked')),
}
test('renders the dropdown', () => {
  render(<SuggestionDropdown 
    countryData={dummyDropdownProps.countryData}
    onListItemClick={dummyDropdownProps.onLiClick}
  />);
  const suggestionDropdownUl = screen.getByLabelText('suggestion-dropdown-ul');
  expect(suggestionDropdownUl).toBeInTheDocument();
});

test('Given array of country data, renders a DropdownListItem for each of them', () => {
  render(<SuggestionDropdown 
    countryData={dummyDropdownProps.countryData}
    onListItemClick={dummyDropdownProps.onLiClick}
  />);

  const nestedLiComponents = screen.getAllByLabelText("country-list-item");
  const liComponent1 = screen.getByText('Brazil');
  const liComponent2 = screen.getByText('Argentina');

  expect(nestedLiComponents).toHaveLength(2);
  expect(liComponent1).toBeInTheDocument();
  expect(liComponent2).toBeInTheDocument();
});
