/* eslint no-case-declarations: 0 */
import {
  CLEAR_SELECT,
  TOGGLE_SELECT,
  VALIDATE_SET,
  DEAL_BOARD,
  SYNC_BOARD,
  IS_CHOOSING,
  CLEAR_SELECTION_TIMER,
  START_SELECTION_TIMER,
  DECREMENT_TIMER
} from '../constants'

import {
  dealBoard,
  replaceSet,
  validSet,
  shallowEqual
} from '../lib/deckHelpers'

const initialState = {
  rowSize: 4,
  selectedCards: [],
  isChoosing: false,
  setButtonDisabled: false,
  setCountDown: 5
}

// TODO: Compose reducers
const app = (state = initialState, action) => {
  console.log('ACTION', action)
  switch (action.type) {
    // Board Actions
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

    // Button actions
    case IS_CHOOSING: {
      return {
        ...state,
        isChoosing: true
      }
    }

    case CLEAR_SELECTION_TIMER: {
      return {
        ...state,
        setButtonDisabled: false,
        isChoosing: false,
        selectedCards: [],
        setCountDown: 5
      }
    }

    case START_SELECTION_TIMER: {
      return {
        ...state,
        setButtonDisabled: true
      }
    }

    case DECREMENT_TIMER: {
      const { setCountDown } = state
      return {
        ...state,
        setCountDown: setCountDown - 1

      }
    }

    default:
      return state
  }
}

export default app
