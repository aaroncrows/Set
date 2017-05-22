import {
  START_NEW_GAME,
  NEW_GAME_CREATED,
  JOIN_GAME
} from '../constants'

const startNewGame = userName => (
  { type: START_NEW_GAME, userName }
)

const newGameCreated = id => (
  { type: NEW_GAME_CREATED, id }
)

const joinGame = id => (
  { type: JOIN_GAME, id }
)

export {
  startNewGame,
  newGameCreated,
  joinGame
}

