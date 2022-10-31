import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodoState } from '../types';

const fetchTodoData = createAsyncThunk<TodoState, undefined, { rejectValue: string }>(
  'todo/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const todoItems = await fetchApi();
      return todoItems;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const fetchApi = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1');
  return data;
};

export default fetchTodoData;
