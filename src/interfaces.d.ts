export interface CountryApiResponseData {
  name: {
    common: string,
  },
  flag: string,
}

export interface MappedCountryData {
  name: string,
  flag: string,
}

export interface SuggestionDropdownProps {
  countryData: MappedCountryData[];
}

export type MappedCountryDataKey = "name";