import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import io from 'socket.io-client'

import app from './reducers'
import socketMiddleware from './middleware/socket'
import Board from './components/board'

import './global-styles/main.scss'

const sock = io('http://localhost:8888/')
const store = createStore(app, applyMiddleware(socketMiddleware(sock), thunk))
sock.on('new', cards => {
  store.dispatch({type: 'DEAL_BOARD', cards})
})
const Main = () => (
  <Provider store={store}>
    <Board />
  </Provider>
)

render(<Main />, document.getElementById('react-root'))
