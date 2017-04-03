import Card from './card'

const SHAPES = ['oval', 'curve', 'diamond']
const PATTERNS = ['solid', 'striped', 'empty']
const COLORS = ['red', 'blue', 'green']

class Deck {
  static get shapes() {
    return [...SHAPES]
  }

  static get patterns() {
    return [...PATTERNS]
  }

  static get colors() {
    return [...COLORS]
  }

  static validSet(a, b, c) {
    const set = [a, b, c]
    const unique = (arr, prop) => {
      const seen = {}
      return arr.every((card) => {
        if (seen[card[prop]]) return false
        seen[card[prop]] = true
        return true
      })
    }

    const same = (arr, prop) => arr.every(card => (
      card[prop] === arr[0][prop]
    ))
    const properties = ['shape', 'count', 'pattern', 'color']

    return properties.every(prop => unique(set, prop) || same(set, prop))
  }

  generateDeck() {
    this.cards = Deck.shapes.reduce((shapeDeck, shape) => {
      const cardsByPattern = Deck.patterns.reduce((patternDeck, pattern) => {
        const cardsByColor = Deck.colors.reduce((colorDeck, color) => {
          const cardsByCount = [1, 2, 3].map(count => (
            new Card(shape, pattern, color, count)
          ))

          return [...colorDeck, ...cardsByCount]
        }, [])

        return [...patternDeck, ...cardsByColor]
      }, [])

      return [...shapeDeck, ...cardsByPattern]
    }, [])
  }

  shuffle() {
    const swap = (a, b) => {
      const temp = this.cards[a]
      this.cards[a] = this.cards[b]
      this.cards[b] = temp
    }

    let randomIndex
    this.cards.forEach((_, i) => {
      randomIndex = Math.floor(Math.random() * this.cards.length)

      swap(i, randomIndex)
    })
  }
}

export default Deck
