/* eslint no-case-declarations: 0 */
import {
  CLEAR_SELECT,
  TOGGLE_SELECT,
  VALIDATE_SET,
  DEAL_BOARD,
  SYNC_BOARD
} from '../constants'

import {
  dealBoard,
  replaceSet,
  validSet,
  shallowEqual
} from '../lib/deckHelpers'

const initialState = {
  rowSize: 4,
  selectedCards: []
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECT: {
      const selected = state.selectedCards
      const { card } = action
      const toggleOn = !state.selectedCards.some(c => shallowEqual(c, card))
      const selectedCards = toggleOn ? [...selected, card] : selected.filter(c => !shallowEqual(c, card))
      return {
        ...state,
        selectedCards
      }
    }

    case CLEAR_SELECT: {
      return {
        ...state,
        selectedCards: []
      }
    }

    case SYNC_BOARD: {
      const { selectedCards } = action

      return {
        ...state,
        selectedCards
      }
    }

    case DEAL_BOARD: {
      const { deck: cards, board } = dealBoard(action.cards)
      return {
        ...state,
        cards,
        board
      }
    }

    case VALIDATE_SET: {
      const { cards: currentCards, board: currentBoard, selectedCards } = state
      const isValidSet = validSet(selectedCards)
      let replaced
      // deal three new cards
      if (isValidSet) {
        replaced = replaceSet(currentCards, currentBoard, selectedCards)
      } else {
        replaced = { board: currentBoard, deck: selectedCards }
      }

      const { board, deck: cards } = replaced
      return {
        ...state,
        board,
        cards,
        selectedCards: []
      }
    }

    default:
      return state
  }
}

export default app
