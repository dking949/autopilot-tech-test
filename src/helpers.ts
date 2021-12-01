import { CountryApiResponseData, MappedCountryData, MappedCountryDataKey } from "./interfaces";

export const parseCountryApiResponse = (responseData: CountryApiResponseData[]): MappedCountryData[] => { //TODO Declare interface
  const mappedCountryData = responseData.map((country) => {
    return {
      name: country.name.common,
      flag: country.flag,
    }
  });
  return mappedCountryData;
}

/**
 * Function to sort alphabetically an array of objects by some specific key.
 * 
 * @param {String} property Key of the object to sort.
 */
 export const sortAlphabetically = (property: MappedCountryDataKey) => {
  var sortOrder = 1;
  return function (a: MappedCountryData,b: MappedCountryData) {
      if(sortOrder === -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}