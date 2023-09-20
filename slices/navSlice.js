import { createSlice } from "@reduxjs/toolkit";

const initialState={
    origin: null,
    destination: null,
    travelTimeTransformation:null
}

export const navSlice=createSlice({
    name:'nav',
    initialState,
    reducer:{
        setOrigin:(state, action)=>{
            state.origin=action.payload;
        },
        setDestination:(state,action)=>{
            state.destination=action.payload;
        },
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeTransformation=action.payload;
        },
    },
});

export const {setOrigin, setDestination,setTravelTimeInformation} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state)=> state.nav.destination;
export const selectTravelTimeInformation = (state)=> state.nav.travelTimeTransformation;

export default navSlice.reducer;