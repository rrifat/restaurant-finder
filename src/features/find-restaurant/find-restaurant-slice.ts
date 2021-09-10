import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResultView } from "components/search-bar";

interface State {
  venues: SearchResultView;
}

const initialState: State = {
  venues: [],
};

const findRestaurantSlice = createSlice({
  name: "find-restaurant",
  initialState,
  reducers: {
    setVenues(state, action: PayloadAction<SearchResultView>) {
      // it's ok to do because immer makes it
      // immutable under the hood
      state.venues = action.payload;
    },
  },
});

export const { setVenues } = findRestaurantSlice.actions;

export default findRestaurantSlice.reducer;
