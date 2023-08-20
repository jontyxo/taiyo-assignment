import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit";

const persistConfig={
    key:'root',
    version:1,
    storage
};
const reducer=combineReducers({
    contact: contactReducer
})
const persistedReducer=persistReducer(persistConfig,reducer);

export const store= configureStore({
    reducer:persistedReducer
})
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;