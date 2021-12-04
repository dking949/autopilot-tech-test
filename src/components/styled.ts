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
  max-height: 80vh;
  overflow: auto;
  position: relative;
`;

export const DropdownListItemStyled = styled.li`
  color: black;
  gap: 20px;
  display: flex;
  cursor: pointer;
  padding: 0px 10px 0px 10px;

  :hover {
    background-color: beige;
  }
`;

export const CountryInputStyled = styled.input`
  border-radius: 3px;
  width: 200px;
  height: 36px;
  position: relative;
`;

export const AutoCompleteStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const InputChevronStyled = styled(ExpandMoreIcon)`
  position: absolute;
  right: 5px;
  top:8px;
  cursor: pointer;
  color: grey;
`;