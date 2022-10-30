import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchTodoData from '../api/fetchTodoList';
import { InitialState, TodoState } from '../types';

const initialState: InitialState = {
  todoItem: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodo: ({ todoItem }, { payload }: PayloadAction<number>) => {
      //   return state.todoItem.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
      todoItem.map((todo) => (todo.id === payload ? { ...todo, completed: !todo.completed } : todo));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoData.pending, (state) => {
        state.todoItem = [];
      })
      .addCase(fetchTodoData.fulfilled, (state, action: PayloadAction<TodoState>) => {
        state.todoItem = action.payload;
      })
      .addCase(fetchTodoData.rejected, (state) => {});
  },
});
const selectSelf = (state: InitialState) => state;
export const todoItemsSelector = createSelector(selectSelf, (state: Pick<InitialState, 'todoItem'>) => state.todoItem);

export const { toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
