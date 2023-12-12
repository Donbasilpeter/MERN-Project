import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: {},
  userList :[]
}

export const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },

  },
})

export const { setCurrentUser,setUserList } = userSlice.actions

export default userSlice.reducer;