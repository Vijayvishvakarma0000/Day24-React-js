// import { configureStore } from "@reduxjs/toolkit";
// import Student from "../pages/Student";
// import Teacher from "../pages/Teacher";




// export const store=configureStore({
//     reducer:{
//         student:studentReducer,
//         teacher:teacherReducer
//     }
// })







import { configureStore } from "@reduxjs/toolkit";

// Slice reducers import karo
import studentReducer from "../slices/studentSlice";
import teacherReducer from "../slices/teacherSlice";

// Store create karo aur reducers combine karo
export const store = configureStore({
  reducer: {
    student: studentReducer,   // state.student me access hoga
    teacher: teacherReducer,   // state.teacher me access hoga
  },
});

// Default export
export default store;
