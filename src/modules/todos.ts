import { createSlice } from '@reduxjs/toolkit';
import { TodoState } from '../types';

const initialState: TodoState = [
  {
    userId: 1,
    id: 1,
    title: 'hello',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'bye',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'bye',
    completed: true,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
