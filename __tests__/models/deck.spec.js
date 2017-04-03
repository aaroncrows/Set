import Deck from '../../src/models/deck'
import Card from '../../src/models/card'

const shape = 'test'
const color = 'test'
const count = 0
const pattern = 'test'
const emptySet = Array(3).fill(null)

let testDeck

beforeEach(() => {
  testDeck = new Deck()
})

test('should generate a full Set deck', () => {
  testDeck.generateDeck()

  expect(testDeck.cards.length).toBe(81)
  expect(testDeck.cards.every(c => c instanceof Card)).toBe(true)
})

test('should generate a set of unique cards', () => {
  const seen = {}
  let cardString
  testDeck.generateDeck()

  testDeck.cards.forEach((c) => {
    cardString = JSON.stringify(c)

    if (seen[cardString]) throw new Error('Duplicate Card')
    seen[cardString] = true
  })
})

test('should shuffle the deck', () => {
  testDeck.generateDeck()
  const unshuffled = [...testDeck.cards]
   testDeck.shuffle()
  const isShuffled = testDeck.cards.some((c, i) => unshuffled[i] !== c)

  expect(isShuffled).toBe(true)
})

test('should detect a valid set with all the same values', () => {
  const validTestSet = emptySet.map(_ => (
    { shape, color, count, pattern }
  ))

  expect(Deck.validSet(...validTestSet)).toBe(true)
})

test('should detect a valid set with all unique values', () => {
  const validTestSet = emptySet.map((_, i) => ({
      shape: `${shape}${i}`,
      color: `${color}${i}`,
      count: count + i,
      pattern: `${pattern}${i}`
    }))

  expect(Deck.validSet(...validTestSet)).toBe(true)
})

test('should detect a mixed set', () => {
  const validTestSet = emptySet.map((_, i) => (
    { shape, color, count: count + i, pattern: `${pattern}${i}` }
  ))

  expect(Deck.validSet(...validTestSet)).toBe(true)
})

test('should detect an invalid set', () => {
  const invalidTestSet = emptySet.map(_ => (
    { shape, color, count, pattern }
  ))

  invalidTestSet[2].pattern = 'nottest'

  expect(Deck.validSet(...invalidTestSet)).toBe(false)
})

