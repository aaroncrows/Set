
import {
  dealBoard,
  toggleSelect,
  validateSet,
  syncBoard,
  replaceCards
} from 'src/actions/boardActions'

import {
  DEAL_BOARD,
  TOGGLE_SELECT,
  VALIDATE_SET,
  SYNC_BOARD,
  REPLACE_CARDS
} from 'src/constants'


test('dealBoard', () => {
  const expected = { type: DEAL_BOARD }
  const result = dealBoard()

  expect(result).toEqual(expected)
})

test('replaceCards', () => {
  const expected = { type: REPLACE_CARDS, selectedCards: ['test']}
  const result = replaceCards(['test'])

  expect(result).toEqual(expected)
})

test('toggleSelect', () => {
  const card = { shape: 'test' }
  const expected = { type: TOGGLE_SELECT, card }
  const result = toggleSelect(card)

  expect(result).toEqual(expected)
})

test('syncBoard', () => {
  const expected = { type: SYNC_BOARD, selectedCards: []}
  const result = syncBoard([])

  expect(result).toEqual(expected)
})

