import React from 'react'
import styled from 'styled-components';

export const DropdownListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: white;
  border-radius: 3px;
  list-style-type: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0px 10px 0px 10px;
`;

export const DropdownListItemStyled = styled.li`
  color: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;