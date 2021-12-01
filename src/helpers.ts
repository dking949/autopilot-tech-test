import { CountryApiResponseData, MappedCountryData } from "./interfaces";

export const parseCountryApiResponse = (responseData: CountryApiResponseData[]): MappedCountryData[] => { //TODO Declare interface
  const mappedCountryData = responseData.map((country) => {
    return {
      name: country.name.common,
      flag: country.flag,
    }
  });
  return mappedCountryData;
}