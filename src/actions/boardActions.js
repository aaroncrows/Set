import {
  DEAL_BOARD,
  TOGGLE_SELECT,
  VALIDATE_SET
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

const validateIfComplete = card => {
  return (dispatch, getState) => {
    dispatch(toggleSelect(card))

    if (getState().selectedCards.length < 3) return
    dispatch(validateSet())
  }
}

export {
  dealBoard,
  toggleSelect,
  validateSet,
  validateIfComplete
}
