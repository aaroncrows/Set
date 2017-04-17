
import {
  dealBoard,
  toggleSelect,
  validateSet,
  syncBoard
} from 'src/actions/boardActions'

import {
  DEAL_BOARD,
  TOGGLE_SELECT,
  VALIDATE_SET,
  SYNC_BOARD
} from 'src/constants'


test('dealBoard', () => {
  const expected = { type: DEAL_BOARD }
  const result = dealBoard()

  expect(result).toEqual(expected)
})

test('toggleSelect', () => {
  const card = { shape: 'test' }
  const expected = { type: TOGGLE_SELECT, card }
  const result = toggleSelect(card)

  expect(result).toEqual(expected)
})

test('validateSet', () => {
  const expected = { type: VALIDATE_SET }
  const result = validateSet()

  expect(result).toEqual(expected)
})

test('syncBoard', () => {
  const expected = { type: SYNC_BOARD, selectedCards: []}
  const result = syncBoard([])

  expect(result).toEqual(expected)
})

