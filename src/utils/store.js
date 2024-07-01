import {configureStore} from '@reduxjs/toolkit';
import favSlice from './favSlice';

const store=configureStore({
    reducer:{
        fav:favSlice,
    },
});
export default store;

