import {
  START_SELECTION_TIMER,
  CLEAR_SELECTION_TIMER,
  PAUSE_SELECTION,
  IS_CHOOSING,
  DECREMENT_TIMER
} from '../constants'

const startTimer = () => (
  { type: START_SELECTION_TIMER }
)

const clearTimer = () => (
  { type: CLEAR_SELECTION_TIMER }
)

const pauseSelection = () => (
  { type: PAUSE_SELECTION }
)

const isChoosing = () => (
  { type: IS_CHOOSING }
)

const decrementTimer = () => (
  { type: DECREMENT_TIMER }
)

const pauseForSelect = () => (dispatch) => {
  let intervalCount = 0
  dispatch(pauseSelection())
  dispatch(startTimer())
  const selectTimer = setInterval(() => {
    intervalCount += 1
    dispatch(decrementTimer())

    if (intervalCount < 5) return
    clearInterval(selectTimer)
    dispatch(clearTimer())
  }, 1000)
}

const chooseSet = () => (dispatch) => {
  dispatch(isChoosing())
  dispatch(pauseForSelect())
}

export {
  startTimer,
  clearTimer,
  pauseSelection,
  pauseForSelect,
  decrementTimer,
  chooseSet,
  isChoosing,
}

