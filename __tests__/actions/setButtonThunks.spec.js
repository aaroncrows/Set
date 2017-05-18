import {
  pauseForSelect,
  chooseSet
} from 'src/actions/setButtonActions'

import {
  ENABLE_CARD_SELECT
} from 'src/constants'

let mockDispatch

beforeEach(() => {
  mockDispatch = jest.fn()
})

test('chooseSet', () => {
  chooseSet()(mockDispatch)

  const [firstArgSet, secondArgSet] = mockDispatch.mock.calls
  const action = firstArgSet[0]
  const func = secondArgSet[0]

  expect(action).toEqual({ type: ENABLE_CARD_SELECT })
  expect(func.toString()).toEqual(pauseForSelect().toString())
})

test('pauseForSelect', () => {
  global.setInterval = fn => (
    Array.from(Array(5), _ => fn())
  )
  global.clearInterval = () => {}

  pauseForSelect()(mockDispatch)
  expect(mockDispatch).toHaveBeenCalledTimes(9)
})


