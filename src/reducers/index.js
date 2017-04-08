/* eslint no-case-declarations: 0 */
import {
  CLEAR_SELECT,
  TOGGLE_SELECT,
  VALIDATE_SET,
  DEAL_BOARD
} from '../constants'

import Deck from '../models/deck'

const testDeck = new Deck()

const initialState = {
  deck: testDeck,
  board: testDeck.dealBoard(),
  cards: testDeck.cards,
  rowSize: 4,
  selectedCards: [],
}

const app = (state = initialState, action) => {
  console.log(action)
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

    case 'SYNC_BOARD':
      return {
        ...state,
        selectedCards: action.selected
      }

    case DEAL_BOARD: {
      const newDeck = Object.assign(Object.create(Deck.prototype), state.deck)
      newDeck.cards = action.cards

      return {
        ...state,
        deck: newDeck,
        cards: newDeck.cards,
        board: newDeck.dealBoard()
      }
    }

    case VALIDATE_SET:
      const isValidSet = Deck.validSet(state.selectedCards)
      // deal three new cards
      if (isValidSet) {
        state.deck.replaceSet(state.selectedCards)
      }
      return {
        ...state,
        board: testDeck.board,
        cards: testDeck.cards,
        selectedCards: []
      }

    default:
      return state
  }
}

export default app
