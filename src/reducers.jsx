import { createSlice } from "@reduxjs/toolkit";
import Services_Data from "./assets/services_data";

const initialState = {
  services: Services_Data,
  // user: {},
  loader: false,
};
const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addService: (state, action) => {
      state.services.push(action.payload);
    },
    removeService: (state, action) => {
      state.services = state.services.filter(
        (service) => service.s_no !== action.payload.s_no
      );
    },
    // setUser:(state, action) => {
    //   state.user = action.payload
    // }
    addLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});
export const { addService, removeService, addLoader } = serviceSlice.actions;
export default serviceSlice.reducer;
