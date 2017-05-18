import {
  ENABLE_CARD_SELECT,
  RESET_DISABLED,
  DISABLE_SET_BUTTON
} from '../constants'

const disabled = (state = { cardSelectDisabled: true, setButtonDisabled: false }, action) => {
  switch(action.type) {
    case ENABLE_CARD_SELECT: {
      return {
        ...state,
        cardSelectDisabled: false
      }
    }

    case RESET_DISABLED: {
      return {
        setButtonDisabled: false,
        cardSelectDisabled: true
      }
    }

    case DISABLE_SET_BUTTON: {
      return {
        ...state,
        setButtonDisabled: true
      }
    }

    default:
      return state
  }
}

export default disabled

