import { createSlice } from "@reduxjs/toolkit";
 const userSlice=createSlice({

    name:"user",
    initialState:{name:"guest"},
    reducers:{
        changeName:(state,action)=>{
            state.name=action.payload
        },
    },
});

export const {changeName}=userSlice.actions;

export default userSlice.reducer;