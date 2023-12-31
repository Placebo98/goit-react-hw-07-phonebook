const { createSlice } = require('@reduxjs/toolkit');

const initialFilterState = '';

const mySlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    changeContactFilter(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = mySlice.reducer;
export const { changeContactFilter } = mySlice.actions;
