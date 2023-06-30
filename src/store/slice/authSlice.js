import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  isLoggedIn: false,
  isWin: false,
  index: 0,
  hint : 5,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    winner: (state) => {
      state.isWin = true;
    },
    restart: (state) => {
      state.name = '';
      state.isLoggedIn = false;
      state.isWin = false;
      state.index = 0;
      state.hint = 5;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setHint : (state) => {
      state.hint--;
    }
  },
});

export const authSliceAction = authSlice.actions;

export default authSlice.reducer;
