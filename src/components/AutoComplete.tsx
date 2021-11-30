import React from 'react';
import CountryInput from './CountryInput';
import SuggestionDropdown from './SuggestionDropdown';

const AutoComplete = () => {
  return (
    <div>
      <CountryInput />
      <SuggestionDropdown />
    </div>
  );
}

export default AutoComplete;