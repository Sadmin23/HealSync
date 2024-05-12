import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: {
    userId: 'None',
    username: 'John Doe',
    user: 'None',
    gender: 'None',
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
        userId: 'None',
        username: 'None',
        user: 'None',
        gender: 'None'
      };
    },
  },
})

export const { SignInUser, SignOut } = userSlice.actions
export const UserData = (state) => state.user.currentUser
export default userSlice.reducer