import React, { useEffect } from 'react';
import CountryInput from './CountryInput';
import SuggestionDropdown from './SuggestionDropdown';
import { parseCountryApiResponse, sortAlphabetically } from '../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setAllCountries, setIsDropDownVisible, setSuggestions, setUserInput, setUserSelection } from '../redux-toolkit/MainSlice';
import { RootState } from '../redux-toolkit/store';
import { MappedCountryData } from '../interfaces';
import { AutoCompleteStyled } from './styled';
import axios from 'axios';

const AutoComplete = () => {

  // Redux
  const dispatch = useDispatch();
  const {
    allCountries,
    isDropdownVisible,
    userInput,
    suggestions,
  } = useSelector((state: RootState) => state.countries)

  // API
  const fetchData = async () => {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    const countryData = parseCountryApiResponse(res.data);
    let sortedCountryData = [...countryData].sort(sortAlphabetically("name"));
    dispatch(setAllCountries(sortedCountryData));
    dispatch(setSuggestions(sortedCountryData));
  }

  // Fetch the countries from the API on initial load
  useEffect(() => {
    fetchData();
  }, []);

  const inputOnChange = (e: any) => {
    // NOTE: If had time, I would perform validation on the input
    const userInputText = e.currentTarget.value;
    let currentSuggestions = undefined;

    if (userInputText.length < userInput.length) {
      // User has removed a character, need to filter on entire country array again
      currentSuggestions = allCountries;
    } else {
      currentSuggestions = suggestions;
    }

    const newSuggestions = currentSuggestions.filter((country: MappedCountryData) => {
      return country.name.toLowerCase().indexOf(userInputText.toLowerCase()) > -1;
    });

    dispatch(setUserInput(userInputText));
    dispatch(setSuggestions(newSuggestions));
  };

  const onFocusHandler = () => {
    dispatch(setIsDropDownVisible(true));
  }

  const onListItemClick = (click: any) => {
    const countryIndex = parseInt(click.currentTarget.getAttribute('data-country-index'));
    const selection = suggestions[countryIndex];
    dispatch(setUserSelection(selection));
    dispatch(setUserInput(selection.name))
    dispatch(setIsDropDownVisible(false));
  }

  return (
    <AutoCompleteStyled>
      <CountryInput onChange={inputOnChange} userInput={userInput} onFocus={onFocusHandler} />
      {isDropdownVisible && <SuggestionDropdown countryData={suggestions} onListItemClick={onListItemClick}/>}
    </AutoCompleteStyled>
  );
}

export default AutoComplete;