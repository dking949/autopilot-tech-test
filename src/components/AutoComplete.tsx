import React from 'react';
import CountryInput from './CountryInput';
import SuggestionDropdown from './SuggestionDropdown';

const AutoComplete = () => {
  return (
    <>
      <CountryInput />
      <SuggestionDropdown />
    </>
  );
}

export default AutoComplete;