import {
  DEAL_BOARD,
  TOGGLE_SELECT,
  CLEAR_SELECT,
  VALIDATE_SET
} from '../constants'

// Board actions
const dealBoard = () => (
  { type: DEAL_BOARD }
)

const toggleSelect = card => (
  { type: TOGGLE_SELECT, card }
)

const clearSelect = () => (
 { type: CLEAR_SELECT }
)


const validateSet = () => (
 { type: VALIDATE_SET }
)
export {
  dealBoard,
  toggleSelect,
  clearSelect,
  validateSet
}
