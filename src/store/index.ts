import { configureStore } from "@reduxjs/toolkit";
import findRestaurantReducer from "features/find-restaurant/find-restaurant-slice";

const store = configureStore({
  reducer: { findRestaurant: findRestaurantReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
