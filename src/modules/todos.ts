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
    toggleTodo: (state, { payload }: PayloadAction<number>) => {
      state.todoItem.map((todo) => (todo.id === payload ? (todo.completed = !todo.completed) : todo));
    },
    addTodo: (state, _) => {
      const nextId = Math.max(...state.todoItem.map((todo) => todo.id)) + 1;
      state.todoItem.push({
        userId: 1,
        id: nextId,
        title: 'New タスク',
        completed: false,
      });
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

export const { toggleTodo, addTodo } = todosSlice.actions;
export default todosSlice.reducer;
