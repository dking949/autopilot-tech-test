import React from 'react';
import { render, screen } from '@testing-library/react';
import SuggestionDropdown from '../components/SuggestionDropdown';

test('renders the dropdown', () => {
  render(<SuggestionDropdown />);
  const suggestionDropdown = screen.getByLabelText('suggestion-dropdown');
  expect(suggestionDropdown).toBeInTheDocument();
});
