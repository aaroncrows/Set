import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import app from './reducers'
import socketMiddleware from './middleware/socket'
import {
  Layout,
  Board,
  Users,
  GameList,
  NewGameForm
} from './components'

import './global-styles/main.scss'


const store = createStore(app, applyMiddleware( thunk,socketMiddleware))
const history = createBrowserHistory()

const Main = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={Layout}/>
        <Route path="/game" exact component={Board}/>
        <Route path="/game" exact component={Users}/>
        <Route path="/dashboard" exact component={NewGameForm}/>
        <Route path="/dashboard" exact component={GameList}/>
      </div>
    </Router>
  </Provider>
)

render(<Main />, document.getElementById('root'))

