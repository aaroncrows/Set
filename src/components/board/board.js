import React from 'react'
import uid from '../../lib/uid'

import Card from '../card/card'

const Board = ({ board }) => (
  <ul className="board">
    {
      board.map(row => (
        <ul key={uid()}>
          {row.map(c => <Card key={uid()} {...c} />)}
        </ul>))
    }
  </ul>
)

export default Board
