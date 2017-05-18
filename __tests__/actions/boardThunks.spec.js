import {
  validateIfComplete,
  syncAndValidate
} from 'src/actions/boardActions'

import {
  TOGGLE_SELECT,
  CLEAR_SELECT,
  SYNC_BOARD,
  REPLACE_CARDS
} from 'src/constants'

import * as helpers from 'src/lib/deckHelpers'

const mockDispatch = jest.fn()
const mockValidSet = jest.fn(() => false)

jest.mock('src/lib/deckHelpers')

helpers.validSet = mockValidSet

beforeEach(() => {
  mockDispatch.mockReset()
  mockValidSet.mockReset()
})

test('validateIfComplete should dispatch two calls for three selected and invalid set', () => {
  const mockGetState = () => ({selectedCards: {length: 3}})
  const card = { shape: 'test' }
  const expected = [
    [{ type: TOGGLE_SELECT, card }],
    [{ type: CLEAR_SELECT }]
  ]

  validateIfComplete({shape: 'test'})(mockDispatch, mockGetState)

  expect(mockDispatch.mock.calls).toEqual(expected)
})

test('validateIfComplete should dispatch three calls for three selected and valid set', () => {
  const mockGetState = () => ({selectedCards: {length: 3}})
  const card = { shape: 'test' }
  const expected = [
    [{ type: TOGGLE_SELECT, card }],
    [{ type: REPLACE_CARDS, selectedCards: { length: 3 } }],
    [{ type: CLEAR_SELECT }]
  ]

  mockValidSet.mockImplementationOnce(() => true)

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
  const expected = [
    [{ type: SYNC_BOARD, selectedCards }],
    [{ type: CLEAR_SELECT }]
  ]

  syncAndValidate(selectedCards)(mockDispatch, mockGetState)

  expect(mockDispatch.mock.calls).toEqual(expected)
})

test('syncAndValidate should dispatch three calls for three selected and valid set', () => {
  const mockGetState = () => ({selectedCards: {length: 3}})
  const selectedCards = [{ shape: 'test' }]
  const expected = [
    [{ type: SYNC_BOARD, selectedCards }],
    [{ type: REPLACE_CARDS, selectedCards: { length: 3 } }],
    [{ type: CLEAR_SELECT }]
  ]

  mockValidSet.mockImplementationOnce(() => true)

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

