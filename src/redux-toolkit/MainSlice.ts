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
}

export const MainSlice = createSlice({
  name: 'MainSlice',
  initialState: {
    allCountries: [],
    isDropdownVisible: false,
  } as SliceState,
  reducers: {
    setAllCountries: (state, action) => {
      state.allCountries = action.payload;
    },
    setIsDropDownVisible: (state, action) => {
      state.isDropdownVisible = action.payload;
    },
  },
});

export const {
  setAllCountries,
  setIsDropDownVisible,
} = MainSlice.actions;

export default MainSlice.reducer;
