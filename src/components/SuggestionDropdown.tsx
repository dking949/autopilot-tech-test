import React from 'react'
import { SuggestionDropdownProps } from '../interfaces'
import DropdownListItem from './DropdownListItem'
import { DropdownListStyled } from './styled'

export default function SuggestionDropdown({
  countryData,
  onListItemClick,
}: SuggestionDropdownProps) {

  const renderDropdown = () => {
    if (countryData.length > 0) {
      return countryData.map((country, idx)=> {
        return (<DropdownListItem key={idx} countryIdx={idx} countryName={country.name} countryFlag={country.flag} onClick={onListItemClick}/>)
      });
    }
    return null;
  }

  return (
      <DropdownListStyled aria-label="suggestion-dropdown-ul">
        {renderDropdown()}
      </DropdownListStyled>
  )
}
