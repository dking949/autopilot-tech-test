import React from 'react'
import { DropdownListItemProps } from '../interfaces'
import { DropdownListItemStyled } from './styled'

export default function DropdownListItem({
  countryName,
  countryFlag,
  onClick,
  countryIdx,
}: DropdownListItemProps) {
  return (
    <DropdownListItemStyled data-country-index={countryIdx} aria-label="country-list-item" onClick={onClick}>
      <span aria-label="country-flag-span">{countryFlag}</span>
      <span aria-label="country-name-span">{countryName}</span>
    </DropdownListItemStyled>
  )
}
