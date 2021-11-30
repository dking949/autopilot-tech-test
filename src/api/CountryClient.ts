
import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';

/**
 * The Country API Client. fetches data from the given endpoint
 * using react-query & axios libraries
 *
 * @returns {UseQueryResult} - The React Query Result
 */
export const CountryClient = () => {
  const URL = 'https://restcountries.com/v3.1/all';

  return useQuery(['fetchCountryData'], async () => {
    const resp = await axios.get(URL);
    return resp;
  }, {
    keepPreviousData: true, // Prevents UI jumping when new data is received,
    enabled: false, // Prevent the query from automatically running
  });
};
