import React from 'react'
import { SuggestionDropdownProps } from '../interfaces'
import DropdownListItem from './DropdownListItem'
import { DropdownListStyled } from './styled'

export default function SuggestionDropdown({
  countryData,
  onListItemClick,
}: SuggestionDropdownProps) {
  return (
      <DropdownListStyled aria-label="suggestion-dropdown-ul">
        {countryData.map((country, idx)=> {
          return (<DropdownListItem key={idx} countryIdx={idx} countryName={country.name} countryFlag={country.flag} onClick={onListItemClick}/>)
        })} 
      </DropdownListStyled>
  )
}
