import { createSlice } from "@reduxjs/toolkit";
import Services_Data from "../src/assets/Json/services_data.json";

const initialState = {
  services: Services_Data,
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
    updateService: (state, action) => {
      console.log(action.payload);
      const index = state.services.findIndex(
        (service) => service.s_no === action.payload.s_no
      );
      if (index !== -1) {
        state.services[index] = action.payload;
      }
    },
    addLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});
export const { addService, removeService, addLoader, updateService } =
  serviceSlice.actions;
export default serviceSlice.reducer;
