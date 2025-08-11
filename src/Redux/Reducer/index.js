// src/Redux/Reducer.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import * as thunk from 'redux-thunk';

console.log('Redux Thunk:', thunk); // 👈 should log: function thunk(...)

// import onboardingReducer from './onboardingReducer';
import AuthReducer from './AuthReducer';
import loadingReducer from './loadingReducer';
import FavoriteReducer from './FavoriteReducer';

const onBoardPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
  whitelist: ['onboarding'],
};

const AuthPersistConfig = {
  key: 'Auth',
  storage: AsyncStorage,
  whitelist: ['userData', 'token', 'isLogin'],
};

const FavProjecctConfig = {
  key: 'favProjects',
  storage: AsyncStorage,
  whitelist: ['favProjects'],
};

const rootReducer = combineReducers({
  // onboarding: persistReducer(onBoardPersistConfig, onboardingReducer),
  Auth: persistReducer(AuthPersistConfig, AuthReducer),
  favProjects: persistReducer(FavProjecctConfig, FavoriteReducer),
  isloading: loadingReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
  },
  rootReducer,
);

const dummyReducer = (state = {}, action) => state;

// export const store = createStore(dummyReducer, applyMiddleware(thunk.thunk));
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk.thunk),
);
export const persistor = persistStore(store);
