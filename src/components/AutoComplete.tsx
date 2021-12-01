import React, { useEffect } from 'react';
import CountryInput from './CountryInput';
import SuggestionDropdown from './SuggestionDropdown';
import { CountryClient as fetchCountries } from '../api/CountryClient';
import { parseCountryApiResponse, sortAlphabetically } from '../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setAllCountries } from '../redux-toolkit/MainSlice';
import { RootState } from '../redux-toolkit/store';

const AutoComplete = () => {

  // Redux
  const dispatch = useDispatch();
  const {
    allCountries,
    isDropdownVisible
  } = useSelector((state: RootState) => state.countries)

  // API
  const { data: apiResponse, refetch } = fetchCountries();


  // Fetch the countries from the API on initial load
  useEffect(() => {
    refetch();
    console.log('fetching data...');
  }, []);

  // When the data variable changes, (we get data), parse data from response
  useEffect(() => {
    if(apiResponse?.data) {
      const countryData = parseCountryApiResponse(apiResponse.data);
      let sortedCountryData = [...countryData].sort(sortAlphabetically("name"));
      dispatch(setAllCountries(sortedCountryData));
      console.log('data sent to redux...'); // TODO: this is logging twice
    }
  }, [apiResponse, dispatch]);

  return (
    allCountries.length > 0 ? (<>
      <CountryInput />
      {isDropdownVisible &&<SuggestionDropdown countryData={allCountries}/>}
    </>): null
  );
}

export default AutoComplete;