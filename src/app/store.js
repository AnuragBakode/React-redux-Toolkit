import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from './features/cake/cakeSlice'
import iceCreamReducer from './features/icecream/iceCreamSlice'
import UserReducer from './features/user/UserSlice'


const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user : UserReducer
  },

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
