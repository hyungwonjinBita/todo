import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchTodoData from '../api/fetchTodoList';
import { InitialState, TodoState } from '../types';

const initialState: InitialState = {
  todoItem: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoData.pending, (state) => {
        state.todoItem = [];
      })
      .addCase(fetchTodoData.fulfilled, (state, action: PayloadAction<TodoState>) => {
        console.log(action.payload);
        state.todoItem = action.payload;
      })
      .addCase(fetchTodoData.rejected, (state) => {});
  },
});
const selectSelf = (state: InitialState) => state;
export const todoItemsSelector = createSelector(selectSelf, (state: Pick<InitialState, 'todoItem'>) => state.todoItem);
export default todosSlice.reducer;
