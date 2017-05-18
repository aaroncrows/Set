/* eslint no-case-declarations: 0 */
import { combineReducers } from 'redux'

import {
  CLEAR_SELECT,
  TOGGLE_SELECT,
  VALIDATE_SET,
  DEAL_BOARD,
  REPLACE_CARDS,
  SYNC_BOARD,
  IS_CHOOSING,
  CLEAR_SELECTION_TIMER,
  START_SELECTION_TIMER,
  DECREMENT_TIMER,
  NEW_GAME_CREATED
} from '../constants'

import {
  dealBoard,
  replaceSet,
  validSet,
  shallowEqual
} from '../lib/deckHelpers'

const initialState = {
  defaultState: {
    rowSize: 4,
    isChoosing: false,
    setButtonDisabled: false,
    setCountDown: 5,
    games: []
  },
  selectedCards: []
}

// TODO: Compose reducers
const defaultState = (state = initialState.defaultState, action) => {
  console.log('ACTION', action)
  switch (action.type) {
    // Board Actions

    case DEAL_BOARD: {
      const { deck: cards, board } = dealBoard(action.cards)
      return {
        ...state,
        cards,
        board
      }
    }

    case REPLACE_CARDS: {
      const { cards: currentCards, board: currentBoard } = state
      const { selectedCards } = action

      const { board, deck: cards } = replaceSet(currentCards, currentBoard, selectedCards)

      return {
        ...state,
        board,
        cards
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

const selectedCards = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_SELECT: {
      const selected = state
      const { card } = action
      const toggleOn = !state.some(c => shallowEqual(c, card))
      const selectedCards = toggleOn ? [...selected, card] : selected.filter(c => !shallowEqual(c, card))
      return selectedCards
    }

    case CLEAR_SELECT: {
      return []
    }

    case SYNC_BOARD: {
      const { selectedCards } = action

      return selectedCards
    }
    default:
      return state
  }
}

const app = combineReducers({
  defaultState,
  selectedCards
})

export default app
