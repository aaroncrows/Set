import {
  startTimer,
  clearTimer,
  pauseSelection,
  isChoosing,
  decrementTimer
} from 'src/actions/setButtonActions'

import {
  START_SELECTION_TIMER,
  CLEAR_SELECTION_TIMER,
  PAUSE_SELECTION,
  IS_CHOOSING,
  DECREMENT_TIMER
} from 'src/constants'

test('startTimer', () => {
  const result = startTimer()

  expect(result).toEqual({ type: START_SELECTION_TIMER })
})

test('clearTimer', () => {
  const result = clearTimer()

  expect(result).toEqual({ type: CLEAR_SELECTION_TIMER })
})

test('pauseSelection', () => {
  const result = pauseSelection()

  expect(result).toEqual({ type: PAUSE_SELECTION })
})

test('isChoosing', () => {
  const result = isChoosing()

  expect(result).toEqual({ type: IS_CHOOSING })
})

test('decrementTimer', () => {
  const result = decrementTimer()

  expect(result).toEqual({ type: DECREMENT_TIMER })
})


