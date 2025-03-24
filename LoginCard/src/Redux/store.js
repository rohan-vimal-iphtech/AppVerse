// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import todoReducer from "./todoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
    reducer: {
        auth: authReducer,
        todo: persistedTodoReducer, 
    },
});


export const persistor = persistStore(store);
export default store;
