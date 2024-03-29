// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// import { contactsReducer } from "./contacts/reducers";

// export const store = createStore(contactsReducer, composeWithDevTools())

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsList, contactFilter } from './contacts/reducers';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const contactsReducer = combineReducers({
  contacts: contactsList,
  filter: contactFilter,
});

const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedContactReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
