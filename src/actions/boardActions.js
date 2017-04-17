import {
  DEAL_BOARD,
  TOGGLE_SELECT,
  VALIDATE_SET,
  SYNC_BOARD
} from '../constants'

// Board actions
const dealBoard = cards => (
  { type: DEAL_BOARD, cards }
)

const toggleSelect = card => (
  { type: TOGGLE_SELECT, card }
)

const validateSet = () => (
 { type: VALIDATE_SET }
)

const syncBoard = selectedCards => (
  { type: SYNC_BOARD, selectedCards }
)

const validateIfComplete = card => (dispatch, getState) => {
  dispatch(toggleSelect(card))

  if (getState().selectedCards.length < 3) return
  dispatch(validateSet())
}

const syncAndValidate = selected => (dispatch, getState) => {
  dispatch(syncBoard(selected))

  if (getState().selectedCards.length < 3) return
  dispatch(validateSet())
}


export {
  dealBoard,
  toggleSelect,
  validateSet,
  validateIfComplete,
  syncAndValidate
}
