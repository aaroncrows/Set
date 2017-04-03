import Deck from '../../src/models/deck'
import Card from '../../src/models/card'
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
