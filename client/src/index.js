import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from "react-dom/client";
import App from './App.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import {thunk} from 'redux-thunk'
import reducer from './reducers'
import "./index.css"

const store = createStore(reducer, compose(applyMiddleware(thunk)))
// Get the root element from the DOM
const rootElement = document.getElementById('root');
// Create a root container using the createRoot method
const root = ReactDOM.createRoot(rootElement);
// Render the React component tree
root.render(
    <Provider store={store}>
        <App />
    </Provider>
  );