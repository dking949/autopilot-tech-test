import React from 'react'
import { DropdownListItemStyled } from './styled'

interface DropdownListItemProps {
  countryName: string
  countryFlag: any, // TODO: emoji type
}

export default function DropdownListItem({
  countryName,
  countryFlag,
}: DropdownListItemProps) {
  return (
    <DropdownListItemStyled aria-label="country-list-item">
        <span>{countryName}</span>
        <span>{countryFlag}</span>
    </DropdownListItemStyled>
  )
}
