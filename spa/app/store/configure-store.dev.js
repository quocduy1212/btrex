import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
