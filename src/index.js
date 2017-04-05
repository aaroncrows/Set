import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'

import app from './reducers'


const store = createStore(app)

const Main = () => (<Provider store={store} />)

render(<Main />, document.body)
