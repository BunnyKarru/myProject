import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    countrydata : [],
};

export const countryslice = createSlice({
    name : 'dataupdater',
    initialState,
    reducers : {
        addCountry : (state,action)=>{
            state.countrydata = [];
            state.countrydata.push(action.payload);
        },
        filterData : (state,action)=>{

            state.countrydata = state.countrydata.flat().filter(country => country.name.common === action.payload);
        }
    }
});
export const {addCountry,filterData} =countryslice.actions;
export default countryslice.reducer;