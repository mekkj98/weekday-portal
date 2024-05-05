import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { jobListSlice } from "./features/jobList/slice";

// -- `combineSlices` combines the reducers, so no longer need to call `combineReducers`. --
const rootReducer = combineSlices(jobListSlice);

// -- Infer the `RootState` type from the root reducer --
export type RootState = ReturnType<typeof rootReducer>;

//-- we can also make it dynamic and pass preloadedState to 
// clone server side state in client --
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat();
    },
  });
};

// -- Infer the return type of `makeStore` --
export type AppStore = ReturnType<typeof makeStore>;

// -- Infer the `AppDispatch` type from the store itself --
export type AppDispatch = AppStore["dispatch"];

// -- Infer the `AppThunk` type from the Reducer State type --
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
