import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};
const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});
export const { addLoader } =
  serviceSlice.actions;
export default serviceSlice.reducer;
