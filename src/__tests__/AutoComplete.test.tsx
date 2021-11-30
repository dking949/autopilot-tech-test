import React from 'react';
import { render, screen } from '@testing-library/react';
import AutoComplete from '../components/AutoComplete';

test('renders the CountryInput Component and the SuggestionDropdown Component', () => {
  render(<AutoComplete />);
  const input = screen.getByLabelText('country-input');
  const suggestionDropdown = screen.getByLabelText('suggestion-dropdown');
  expect(input).toBeInTheDocument();
  expect(suggestionDropdown).toBeInTheDocument();
});
