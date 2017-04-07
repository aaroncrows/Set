import {
  DEAL_BOARD,
  TOGGLE_SELECT,
  VALIDATE_SET
} from '../constants'

// Board actions
const dealBoard = () => (
  { type: DEAL_BOARD }
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
