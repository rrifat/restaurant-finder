import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  venues: [],
};

const findRestaurantSlice = createSlice({
  name: "find-restaurant",
  initialState,
  reducers: {},
});

export default findRestaurantSlice.reducer;
