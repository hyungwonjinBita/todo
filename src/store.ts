import { configureStore } from '@reduxjs/toolkit';
import { createSelectorHook, useDispatch as useReduxDispatch } from 'react-redux';
import todosSlice from './modules/todos';

const store = configureStore({
  reducer: todosSlice,
});
export type RootState = ReturnType<typeof store.getState>;

// custom useDispatch
type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

// custom useSelector
export const useSelector = createSelectorHook<RootState>();

export default store;
