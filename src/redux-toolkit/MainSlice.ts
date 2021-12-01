/*
Can disable no-param-reassign this here because redux handles
param reassign immutably through the Immer Library.
https://immerjs.github.io/immer/ */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { MappedCountryData } from '../interfaces';

interface SliceState {
  allCountries: MappedCountryData[];
}

export const MainSlice = createSlice({
  name: 'MainSlice',
  initialState: {
    allCountries: [],
  } as SliceState,
  reducers: {
    setAllCountries: (state, action) => {
      state.allCountries = action.payload;
    },
  },
});

export const {
  setAllCountries,
} = MainSlice.actions;

export default MainSlice.reducer;
