import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};
const userSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter((item) => item.id !== action.payload);
    },
    changeUser(state, action) {
      state.users.map((item) => {
        if (item.id === action.payload.id) {
          item.username = action.payload.username;
          item.email = action.payload.email;
        }
        return item;
      });
    },
  },
});

export const {
  addTodo, deleteUser, changeUser,
} = userSlice.actions;
export default userSlice.reducer;