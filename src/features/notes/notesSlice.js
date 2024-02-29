import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ["Note 1", "Note 2"],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("Note added");
        state.value.push(action.payload);
    },
    remove: (state) => {
      console.log("Note deleted");
      state.value.pop();
    },
  },
});

export const { add, remove } = noteSlice.actions;

export default noteSlice.reducer;
