import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { reducers } from '../reducers'
import localForage from 'localforage'

const config = {
  key: 'cozy-bar',
  storage: localForage,
  whitelist: ['locale', 'apps']
}

const reducer = persistCombineReducers(config, { ...reducers })

const createReduxStore = () => {
  let store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
  )
  persistStore(store)

  return store
}

export default createReduxStore
