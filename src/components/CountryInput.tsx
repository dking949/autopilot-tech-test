import React from 'react'
import { CountryInputProps } from '../interfaces';
import { CountryInputStyled, InputChevronStyled, InputContainerStyled } from './styled';

export default function CountryInput({
  onChange,
  userInput,
  onFocus,
}: CountryInputProps) {
  return (
    <InputContainerStyled>
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
