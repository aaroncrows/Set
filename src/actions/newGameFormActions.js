import {
  START_NEW_GAME,
  NEW_GAME_CREATED
} from '../constants'

const startNewGame = userName => (
  { type: START_NEW_GAME, userName }
)

const newGameCreated = id => (
  { type: NEW_GAME_CREATED, id }
)

export {
  startNewGame,
  newGameCreated
}

