import {
  NEW_GAME_CREATED,
  JOIN_GAME
} from '../constants'

const game = (state = { games: [], currentGame: null }, action) => {
  switch (action.type) {
    case NEW_GAME_CREATED: {
      const { id } = action
      return {
        ...state,
        games: [...state.games, id]
      }
    }

    case JOIN_GAME: {
      const { id } = action

      return {
        ...state,
        currentGame: id
      }
    }

    default:
      return state
  }
}

export default game

