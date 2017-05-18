import {
  startTimer,
  clearTimer,
  disableSetButton,
  pauseForSelect,
  decrementTimer,
  chooseSet,
  enableCardSelect,
  resetDisabled
} from 'src/actions/setButtonActions'

import {
  START_SELECTION_TIMER,
  CLEAR_SELECTION_TIMER,
  DISABLE_SET_BUTTON,
  ENABLE_CARD_SELECT,
  DECREMENT_TIMER,
  RESET_DISABLED
} from 'src/constants'

test('startTimer', () => {
  const result = startTimer()

  expect(result).toEqual({ type: START_SELECTION_TIMER })
})

test('clearTimer', () => {
  const result = clearTimer()

  expect(result).toEqual({ type: CLEAR_SELECTION_TIMER })
})

test('decrementTimer', () => {
  const result = decrementTimer()

  expect(result).toEqual({ type: DECREMENT_TIMER })
})

test('disableSetButton', () => {
  const result = disableSetButton()

  expect(result).toEqual({ type: DISABLE_SET_BUTTON })
})

test('enableCardSelect', () => {
  const result = enableCardSelect()

  expect(result).toEqual({ type: ENABLE_CARD_SELECT })
})

test('resetDisabled', () => {
  const result = resetDisabled()

  expect(result).toEqual({ type: RESET_DISABLED })
})

