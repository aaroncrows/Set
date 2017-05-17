import {
  START_NEW_GAME
} from '../constants'

const startNewGame = userName => (
  { type: START_NEW_GAME, userName }
)

export {
  startNewGame
}

