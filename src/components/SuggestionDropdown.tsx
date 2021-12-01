import React from 'react'
import { SuggestionDropdownProps } from '../interfaces'
import DropdownListItem from './DropdownListItem'
import { DropdownListStyled } from './styled'

export default function SuggestionDropdown({
  countryData,
}: SuggestionDropdownProps) {
  return (
    <div aria-label="suggestion-dropdown">
      <DropdownListStyled>
        {countryData.map((country)=> {
          return (<DropdownListItem countryName={country.name} countryFlag={country.flag} />)
        })}
      </DropdownListStyled>
    </div>
  )
}
