import React from 'react'
import ReactDom from 'react-dom'
import App from './main/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import promise from 'redux-promise'

const store = applyMiddleware(promise)(createStore)(reducers)
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))