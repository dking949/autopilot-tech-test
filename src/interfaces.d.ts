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
  onListItemClick: (x: any) => void,
}

export type MappedCountryDataKey = "name";


export interface CountryInputProps {
  onChange: (e: any) => void,
  userInput: string,
  onFocus: () => void,
  selectedCountryFlag?: string,
}

export interface DropdownListItemProps {
  countryName: string
  countryFlag: string,
  onClick: (x: any) => void,
  countryIdx: number,
};