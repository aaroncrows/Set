import Card from '../../src/models/card'

test('Card should generate a card instance', () => {
  const testCard = new Card('testShape', 'testPattern', 'testColor', 5)

  const comparison = { shape: 'testShape', pattern: 'testPattern', color: 'testColor', count: 5 }

  expect(testCard).toEqual(comparison)
})
