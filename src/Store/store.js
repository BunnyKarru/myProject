import {configureStore} from '@reduxjs/toolkit';
import CountrySlice from './CountrySlice';
const store = configureStore({
    reducer : {

        dataupdator : CountrySlice

    }
});
export default store;