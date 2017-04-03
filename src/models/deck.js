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
  generateDeck() {
    const cards = []

    this.cards = Deck.shapes.reduce((deck, shape) => {
        const cardsByPattern = Deck.patterns.reduce((deck, pattern) => {
          const cardsByColor = Deck.colors.reduce((deck, color) => {
            const cardsByCount = [1, 2, 3].map(count => {

              return new Card(shape, pattern, color, count)
            })

            return [...deck, ...cardsByCount]
          }, [])

          return [...deck, ...cardsByColor]
      }, [])

      return [...deck, ...cardsByPattern]
    }, [])
  }
}

export default Deck
