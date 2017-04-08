const dealBoard = (deck) => {
  const rowSize = 4
  const board = Array(3)
    .fill(null)
    .map((_, idx) => {
      const start = idx * rowSize
      const end = start + rowSize
      return deck.slice(start, end)
    })
  deck = deck.slice(rowSize * 3)

  return { board, deck }
}

const replaceSet = (deck, board, set) => {
  deck = [...deck]

  board = board.map(row => row.map( card => set.includes(card) ? deck.pop() : card))

  return { deck, board }
}

const validSet = (set) => {
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

export {
  dealBoard,
  replaceSet,
  validSet
}
