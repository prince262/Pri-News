import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    author: ['author']
}
const root = combineReducers({
    datareducer: persistReducer(persistConfig, reducer)
})
const store = createStore(
    root,
    applyMiddleware((thunk))
)
const appPersist = persistStore(store)
export { store, appPersist };