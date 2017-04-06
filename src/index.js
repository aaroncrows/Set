import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'

import app from './reducers'
import Board from './components/board'

import Deck from './models/deck'

import './global-styles/main.scss'

const store = createStore(app)
const Main = () => (
  <Provider store={store}>
    <Board />
  </Provider>
)

render(<Main />, document.getElementById('react-root'))
