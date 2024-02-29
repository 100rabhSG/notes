import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../features/notes/notesSlice';

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
})