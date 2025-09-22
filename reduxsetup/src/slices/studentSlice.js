import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Ram",
  lastName:'pyare',
  age:45,

};

const studentSlice=createSlice({
    name:'ram',
   initialState,
   reducers:{
    setDefaultstudent:(state)=>{

            state.name = "Ram";
            state.lastName = 'pyare';
            state.age = 50

    },
    setChangedstudent:(state)=>{
            state.name = "Rampyare";
            state.lastName = 'lal';
            state.age = 80 
    },
   },
})
export const { setDefaultstudent, setChangedstudent } =
  studentSlice.actions;
  export default studentSlice.reducer;