import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const DropdownListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: white;
  list-style-type: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0px;
  margin: 0px;
  max-height: 700px;
  overflow: auto;
  position: absolute;
`;

export const DropdownListItemStyled = styled.li`
  display: flex;
  min-height: 36px;
  align-items: center;
  color: black;
  gap: 20px;
  cursor: pointer;
  padding: 0px 10px 0px 10px;
  text-align: left;

  :hover {
    background-color: beige;
  }
`;

export const CountryInputStyled = styled.input`
  display: block;
  border-radius: 3px;
  width: 174px;
  height: 36px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 20px;
`;

export const AutoCompleteStyled = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const InputChevronStyled = styled(ExpandMoreIcon)`
  position: absolute;
  right: 5px;
  cursor: pointer;
  color: grey;
`;

export const InputContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;