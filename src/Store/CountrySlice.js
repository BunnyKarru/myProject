import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    countrydata : [],
};

export const countryslice = createSlice({
    name : 'dataupdater',
    initialState,
    reducers : {
        addCountry : (state,action)=>{
            state.countrydata.push(action.payload);
        }
    }
});
export const {addCountry} =countryslice.actions;
export default countryslice.reducer;