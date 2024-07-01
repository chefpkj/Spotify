import {createSlice} from "@reduxjs/toolkit";
const favSlice=createSlice({
    name:"fav",
    initialState:{
        count:0
    },
    reducers:{
        changeCount:(state)=>{
            state.count=state.count+1;
        }
    }
    
})

export default favSlice.reducer;
export const {changeCount}=favSlice.actions;