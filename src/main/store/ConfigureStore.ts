import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import {persistReducer, persistStore} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,//一个Engine,例如LocalStorage和AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)//returns an enhanced reducer
//applyMiddleware中间件
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

const configureStore = (initialState?: any) => {
    // let store = createStoreWithMiddleware(persistedReducer, initialState, devToolsEnhancer());
    let store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))
    // console.log(store.getState());
    let persistor = persistStore(store);//returns persistor object
    return {store, persistor}
}

export default configureStore;
