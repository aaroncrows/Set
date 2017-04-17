import {
  validateIfComplete,
  syncAndValidate
} from 'src/actions/boardActions'

import {
  TOGGLE_SELECT,
  VALIDATE_SET,
  SYNC_BOARD
} from 'src/constants'

let mockDispatch

beforeEach(() => {
  mockDispatch = jest.fn()
})

test('validateIfComplete should dispatch two calls for three selected', () => {
  const mockGetState = () => ({selectedCards: {length: 3}})
  const card = { shape: 'test' }
  const expected = [[{ type: TOGGLE_SELECT, card }], [{ type: VALIDATE_SET }]]
  validateIfComplete({shape: 'test'})(mockDispatch, mockGetState)

  expect(mockDispatch.mock.calls).toEqual(expected)
})

test('validateIfComplete should dispatch one call for less than three selected', () => {
  const mockGetState = () => ({selectedCards: {length: 2}})
  const card = { shape: 'test' }
  const expected = [[{ type: TOGGLE_SELECT, card }]]
  validateIfComplete({shape: 'test'})(mockDispatch, mockGetState)

  expect(mockDispatch.mock.calls).toEqual(expected)
})

test('syncAndValidate should dispatch two calls for three selected', () => {
  const mockGetState = () => ({selectedCards: {length: 3}})
  const selectedCards = [{ shape: 'test' }]
  const expected = [[{ type: SYNC_BOARD, selectedCards }], [{ type: VALIDATE_SET }]]
  syncAndValidate(selectedCards)(mockDispatch, mockGetState)

  expect(mockDispatch.mock.calls).toEqual(expected)

})

test('syncAndValidate should dispatch one call for less than three selected', () => {
  const mockGetState = () => ({selectedCards: {length: 2}})
  const selectedCards = [{ shape: 'test' }]
  const expected = [[{ type: SYNC_BOARD, selectedCards }]]
  syncAndValidate(selectedCards)(mockDispatch, mockGetState)

  expect(mockDispatch.mock.calls).toEqual(expected)
})
