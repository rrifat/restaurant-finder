import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResultView } from "components/search-bar";

interface State {
  venues: SearchResultView;
  location: {
    lat: number;
    lng: number;
    name: string;
  };
}

const initialState: State = {
  venues: [],
  location: { lat: 23.7815222, lng: 90.4004866, name: "Monstarlab Bangladesh" },
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
    setLocation(
      state,
      action: PayloadAction<{ lat: number; lng: number; name: string }>
    ) {
      // it's ok to do because immer makes it
      // immutable under the hood
      state.location = action.payload;
    },
  },
});

export const { setVenues, setLocation } = findRestaurantSlice.actions;

export default findRestaurantSlice.reducer;
