import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,             
    suggestedUsers: [],
    userProfile: null,
    selectedUser: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setSuggestedUsers: (state, action) => {
      state.suggestedUsers = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUserReels: (state, action) => {
      if (state.user) {
        state.user.reels = action.payload;
      }
    },
    updateBookmarkedReels: (state, action) => {
      if (state.user) {
        state.user.bookmarkedReels = action.payload;
      }
    },
  },
});

export const {
  setAuthUser,
  setSuggestedUsers,
  setUserProfile,
  setSelectedUser,
  updateUserReels,
  updateBookmarkedReels,
} = authSlice.actions;

export default authSlice.reducer;
