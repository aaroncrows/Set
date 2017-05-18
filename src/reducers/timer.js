import {
  CLEAR_SELECTION_TIMER,
  DECREMENT_TIMER
} from '../constants'

const timer = (state = 5, action) => {
  switch(action.type) {
    case CLEAR_SELECTION_TIMER: {
      return 5
    }

    case DECREMENT_TIMER: {
      return state - 1
    }

    default:
      return state
  }
}

export default timer

