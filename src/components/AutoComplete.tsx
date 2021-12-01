import React, { useEffect } from 'react';
import CountryInput from './CountryInput';
import SuggestionDropdown from './SuggestionDropdown';
import { CountryClient as fetchCountries } from '../api/CountryClient';
import { parseCountryApiResponse } from '../helpers';
import { useDispatch } from 'react-redux';
import { setAllCountries } from '../redux-toolkit/MainSlice';

const AutoComplete = () => {

 const dispatch = useDispatch();
  const { data: apiResponse, refetch } = fetchCountries();

  // Fetch the countries from the API on initial load
  useEffect(() => {
    refetch();
  }, []);

  // When the data variable changes, (we get data), parse data from response
  useEffect(() => {
    if(apiResponse?.data) {
      const countryData = parseCountryApiResponse(apiResponse.data);
      dispatch(setAllCountries(countryData));
    }
  }, [apiResponse, dispatch]);

  return (
    <>
      <CountryInput />
      <SuggestionDropdown />
    </>
  );
}

export default AutoComplete;