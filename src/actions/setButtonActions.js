import {
  START_SELECTION_TIMER,
  CLEAR_SELECTION_TIMER,
  DISABLE_SET_BUTTON,
  ENABLE_CARD_SELECT,
  DECREMENT_TIMER,
  RESET_DISABLED
} from '../constants'

import {
  clearSelect
} from './boardActions'

const startTimer = () => (
  { type: START_SELECTION_TIMER }
)

const clearTimer = () => (
  { type: CLEAR_SELECTION_TIMER }
)

const disableSetButton = () => (
  { type: DISABLE_SET_BUTTON }
)

const enableCardSelect = () => (
  { type: ENABLE_CARD_SELECT }
)

const decrementTimer = () => (
  { type: DECREMENT_TIMER }
)

const resetDisabled = () => (
  { type: RESET_DISABLED }
)

const pauseForSelect = () => (dispatch) => {
  let intervalCount = 0
  dispatch(disableSetButton())
  const selectTimer = setInterval(() => {
    intervalCount += 1
    dispatch(decrementTimer())

    if (intervalCount < 5) return
    clearInterval(selectTimer)
    dispatch(resetDisabled())
    dispatch(clearSelect())
    dispatch(clearTimer())
  }, 1000)
}

const chooseSet = () => (dispatch) => {
  dispatch(enableCardSelect())
  dispatch(pauseForSelect())
}

export {
  startTimer,
  clearTimer,
  disableSetButton,
  pauseForSelect,
  decrementTimer,
  chooseSet,
  enableCardSelect,
  resetDisabled
}

