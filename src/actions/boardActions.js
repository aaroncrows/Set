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
export {
  dealBoard,
  toggleSelect,
  validateSet
}
