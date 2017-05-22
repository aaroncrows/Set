import {
  DEAL_BOARD,
  REPLACE_CARDS
} from '../constants'

import {
  dealBoard,
  replaceSet
} from '../lib/deckHelpers'

const deck = (state = {}, action) => {
  switch (action.type) {
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

export default deck

