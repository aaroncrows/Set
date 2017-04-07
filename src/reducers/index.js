import {
  CLEAR_SELECT,
  TOGGLE_SELECT,
  VALIDATE_SET
} from '../constants'

import Deck, { validSet } from '../models/deck'

let testDeck = new Deck()

const initialState = {
  board: testDeck.dealBoard(),
  rowSize: 4,
  selectedCards: [],
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECT:
      const selected = state.selectedCards
      const { card } = action
      const toggleOn = !state.selectedCards.includes(card)
      const selectedCards = toggleOn ? [...selected, card] : selected.filter(c => c !== card)
      return {
        ...state,
        selectedCards
      }

    case CLEAR_SELECT:
      return {
        ...state,
        selectedCards: []
      }

    case VALIDATE_SET:
      const isValidSet = Deck.validSet(state.selectedCards)
      return {
        ...state,
        selectedCards: []
      }

    default:
      return state
  }
}

export default app
