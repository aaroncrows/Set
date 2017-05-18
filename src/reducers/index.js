/* eslint no-case-declarations: 0 */
import { combineReducers } from 'redux'

import {
  CLEAR_SELECT,
  TOGGLE_SELECT,
  DEAL_BOARD,
  REPLACE_CARDS,
  SYNC_BOARD,
  ENABLE_CARD_SELECT,
  CLEAR_SELECTION_TIMER,
  START_SELECTION_TIMER,
  DISABLE_SET_BUTTON,
  RESET_DISABLED,
  DECREMENT_TIMER,
  NEW_GAME_CREATED
} from '../constants'

import {
  dealBoard,
  replaceSet,
  shallowEqual
} from '../lib/deckHelpers'

const initialState = {
  defaultState: {
    timer: 5,
    games: []
  }
}

// TODO: Compose reducers
const defaultState = (state = initialState.defaultState, action) => {
  console.log('ACTION', action)
  switch (action.type) {
    // Board Actions
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
const timer = (state = 5, action) => {
  switch(action.type) {
    case CLEAR_SELECTION_TIMER: {
      return 5
    }

    case DECREMENT_TIMER: {
      return state - 1
    }

    default:
      return state
  }
}

const deck = (state = {}, action) => {
  switch(action.type) {
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

const disabled = (state = { cardSelectDisabled: true, setButtonDisabled: false }, action) => {
  switch(action.type) {
    case ENABLE_CARD_SELECT: {
      return {
        ...state,
        cardSelectDisabled: false
      }
    }

    case RESET_DISABLED: {
      return {
        setButtonDisabled: false,
        cardSelectDisabled: true
      }
    }

    case DISABLE_SET_BUTTON: {
      return {
        ...state,
        setButtonDisabled: true
      }
    }

    default:
      return state
  }
}

const app = combineReducers({
  defaultState,
  deck,
  disabled,
  timer,
  selectedCards
})

export default app
