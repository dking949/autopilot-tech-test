import React from 'react'
import { CountryInputProps } from '../interfaces';
import { CountryInputStyled, InputChevronStyled, InputContainerStyled, InputCountryFlagStyled } from './styled';

export default function CountryInput({
  onChange,
  userInput,
  onFocus,
  selectedCountryFlag,
}: CountryInputProps) {
  return (
    <InputContainerStyled>
      <InputCountryFlagStyled>{selectedCountryFlag}</InputCountryFlagStyled>
      <CountryInputStyled type="text"
        placeholder="Search"
        aria-label="country-input"
        onChange={onChange}
        value={userInput}
        onFocus={onFocus}
        />
      <InputChevronStyled aria-label="dropdown-chevron" onClick={onFocus} />
    </InputContainerStyled>
  )
}
