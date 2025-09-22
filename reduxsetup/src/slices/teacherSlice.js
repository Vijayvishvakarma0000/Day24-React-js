import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Sita",
  lastName: "Devi",
  age: 40,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setDefaultTeacher: (state) => {
      state.name = "Sita";
      state.lastName = "Devi";
      state.age = 45;
    },
    setChangedTeacher: (state) => {
      state.name = "SitaLal";
      state.lastName = "Sharma";
      state.age = 55;
    },
  
  },
});

export const { setDefaultTeacher, setChangedTeacher } =
  teacherSlice.actions;
export default teacherSlice.reducer;
