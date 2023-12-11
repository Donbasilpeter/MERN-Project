import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: {},
}

export const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

  },
})

export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer;