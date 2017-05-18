import { combineReducers } from 'redux'

import game from './game'
import timer from './timer'
import deck from './deck'
import selectedCards from './selectedCards'
import disabled from './disabled'

const app = combineReducers({
  deck,
  disabled,
  timer,
  selectedCards,
  game
})

export default app
