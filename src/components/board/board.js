import React from 'react'
import uid from '../../lib/uid'

import Card from '../card/card'

const Board = ({ board, selectCard, selectedCards }) => (
  <ul className="board">
    {
      board.map(row => (
        <ul key={uid()}>
          {row.map(c => <Card
                          key={uid()}
                          card={c}
                          selected={selectedCards.includes(c)}
                          selectCard={selectCard}
                        />)}
        </ul>))
    }
  </ul>
)

export default Board
