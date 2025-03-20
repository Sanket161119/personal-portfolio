import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from './reducers'

const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
});
export default store;
