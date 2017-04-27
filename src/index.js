import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import thunk from 'redux-thunk'

import app from './reducers'
import socketMiddleware from './middleware/socket'
import Board from './components/board'

import './global-styles/main.scss'


const store = createStore(app, applyMiddleware(thunk, socketMiddleware))


const Main = () => (
  <Provider store={store}>
    <Board />
  </Provider>
)

render(<Main />, document.getElementById('root'))
