import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: {
    username: 'John Doe',
    user: 'None'
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SignInUser: (state, action) => {
      state.currentUser = action.payload;
    },
    SignOut: (state) => {
      state.currentUser = {
        username: 'None',
        user: 'None'
      };
    },
  },
})

export const { SignInUser, SignOut } = userSlice.actions
export const UserData = (state) => state.user.currentUser
export default userSlice.reducer