import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResultView } from "components/search-bar";

interface State {
  venues: SearchResultView;
  location: {
    lat: number;
    lng: number;
  };
}

const initialState: State = {
  venues: [],
  location: { lat: 23.7815222, lng: 90.4004866 },
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
