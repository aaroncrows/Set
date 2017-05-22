import {
  TOGGLE_SELECT,
  CLEAR_SELECT,
  SYNC_BOARD
} from '../constants'

import {
  shallowEqual
} from '../lib/deckHelpers'

const selectedCards = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_SELECT: {
      const { card } = action
      const toggleOn = !state.some(c => shallowEqual(c, card))

      return toggleOn ? [...state, card] : state.filter(c => !shallowEqual(c, card))
    }

    case CLEAR_SELECT: {
      return []
    }

    case SYNC_BOARD: {
      const { selectedCards: cards } = action

      return cards
    }
    default:
      return state
  }
}

export default selectedCards

