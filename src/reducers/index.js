import { TEST_ACTION, SELECT_CARD } from '../constants'
import Deck from '../models/deck'

let testDeck = new Deck()
window.deck = testDeck
const initialState = {
  board: testDeck.dealBoard(),
  rowSize: 4,
  selectedCards: [],
  greeting: 'tessting'
}
const app = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        greeting: 'YEEEAH'
      }
    case SELECT_CARD:
      return {
        ...state,
        selectedCards: [...state.selectedCards, action.card]
      }
    default:
      return state
  }
}

export default app
