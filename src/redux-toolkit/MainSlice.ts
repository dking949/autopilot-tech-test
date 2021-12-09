/*
Can disable no-param-reassign this here because redux handles
param reassign immutably through the Immer Library.
https://immerjs.github.io/immer/ */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { MappedCountryData } from '../interfaces';

interface SliceState {
  allCountries: MappedCountryData[];
  isDropdownVisible: boolean,
  userInput: any,
  suggestions: MappedCountryData[];
  userSelection?: MappedCountryData;
  selectedCountryFlag?: string,
}

export const MainSlice = createSlice({
  name: 'MainSlice',
  initialState: {
    allCountries: [],
    isDropdownVisible: false,
    userInput: '',
    suggestions: [],
  } as SliceState,
  reducers: {
    setAllCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    setIsDropDownVisible: (state, action) => {
      state.isDropdownVisible = action.payload;
    },
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setUserSelection: (state, action) => {
      state.userSelection = action.payload;
    },
    setSelectedCountryFlag: (state, action) => {
      state.selectedCountryFlag = action.payload;
    }
  },
});

export const {
  setAllCountries,
  setIsDropDownVisible,
  setUserInput,
  setSuggestions,
  setUserSelection,
  setSelectedCountryFlag,
} = MainSlice.actions;

export default MainSlice.reducer;
