import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: () => null,
    removeUserFromFeed: (state, action) => {
      const userIdToRemove = action.payload;
      return state.filter((user) => user.id !== userIdToRemove);
    },
  },
});

export const { addFeed, removeFeed, removeUserFromFeed } = feedSlice.actions;

export default feedSlice.reducer;
