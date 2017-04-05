import { TEST_ACTION } from '../constants'
import Deck from '../models/deck'

let testDeck = new Deck()
window.deck = testDeck
const initialState = {
  board: testDeck.dealBoard(),
  rowSize: 4,
  greeting: 'tessting'
}
const app = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        greeting: 'YEEEAH'
      }
    default:
      return state
  }
}

export default app
