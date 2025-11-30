import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: () => null,
  },
}); // Placeholder for user slice code

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
