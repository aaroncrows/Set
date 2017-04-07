import { DEAL_BOARD, SELECT_CARD } from '../constants'

// Board actions
const dealBoard = () => (
  { type: DEAL_BOARD }
)

const selectCard = card => (
  { type: SELECT_CARD, card }
)
export {
  dealBoard,
  selectCard
}
