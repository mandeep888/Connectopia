import react from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { Provider } from 'react-reduux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(reducer, compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
