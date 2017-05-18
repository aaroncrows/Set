import {
  NEW_GAME_CREATED
} from '../constants'

const game = (state = { games: [], currentGame: null }, action) => {
  switch(action.type) {
    case NEW_GAME_CREATED: {
      const { id } = action
      return  {
        ...state,
        games: [...state.games, id]
      }
    }

    default:
      return state
  }
}

export default game

