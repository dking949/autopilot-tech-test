import React from 'react'
import { DropdownListItemProps } from '../interfaces'
import { DropdownListItemStyled } from './styled'

export default function DropdownListItem({
  countryName,
  countryFlag,
  onClick,
  countryIdx,
}: DropdownListItemProps) {
  // The prevent default on the onMouseDown event allows the onClick handler to be fired before the
  // onBlur handler of the autocomplete function
  return (
    <DropdownListItemStyled data-country-index={countryIdx} aria-label="country-list-item" onClick={onClick} onMouseDown={(e) => e.preventDefault()}>
      <span aria-label="country-flag-span">{countryFlag}</span>
      <span aria-label="country-name-span">{countryName}</span>
    </DropdownListItemStyled>
  )
}
