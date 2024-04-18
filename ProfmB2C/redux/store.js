import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notificationReducer from './notificationSlice';
import dataReducer from './dataSlice';
import itemReducer from './itemSlice';
import userReducer from './userSlice';
import serviceTypeReducer from './serviceTypeSlice';
import contractReducer from './contractSlice'; // Import the contractReducer from your contractSlice

// Combine reducers
const rootReducer = combineReducers({
  notification: notificationReducer,
  data: dataReducer,
  items: itemReducer,
  user: userReducer,
  serviceType: serviceTypeReducer,
  contract: contractReducer, // Include contractReducer in the root reducer
});

// Configure persist options
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor
export const persistor = persistStore(store);

export default store;
