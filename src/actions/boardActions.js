import {
  DEAL_BOARD,
  TOGGLE_SELECT,
  SYNC_BOARD,
  CLEAR_SELECT,
  REPLACE_CARDS
} from '../constants'

import {
  validSet
} from '../lib/deckHelpers'

// Board actions
const dealBoard = cards => (
  { type: DEAL_BOARD, cards }
)

const replaceCards = selectedCards => (
  { type: REPLACE_CARDS, selectedCards }
)

const toggleSelect = card => (
  { type: TOGGLE_SELECT, card }
)

const syncBoard = selectedCards => (
  { type: SYNC_BOARD, selectedCards }
)

const clearSelect = () => (
  { type: CLEAR_SELECT }
)

const validateIfComplete = card => (dispatch, getState) => {
  dispatch(toggleSelect(card))

  const { selectedCards } = getState()

  if (selectedCards.length < 3) return
  if (validSet(selectedCards)) dispatch(replaceCards(selectedCards))

  dispatch(clearSelect())
}

const syncAndValidate = selected => (dispatch, getState) => {
  dispatch(syncBoard(selected))
  const { selectedCards } = getState()

  if (selectedCards.length < 3) return
  if (validSet(selectedCards)) dispatch(replaceCards(selectedCards))

  dispatch(clearSelect())
}


export {
  dealBoard,
  replaceCards,
  toggleSelect,
  syncBoard,
  validateIfComplete,
  syncAndValidate,
  clearSelect
}
