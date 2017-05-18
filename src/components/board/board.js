import React from 'react'
import uid from '../../lib/uid'

import Card from '../card/card'

const noop = () => {}

const Board = ({ board, onCardClick, selectedCards, cardSelectDisabled }) => (
  <ul className="board">
    {
      board && board.map(row => (
        <ul key={uid()}>
          {row.map(c => <Card
            key={uid()}
            card={c}
            selected={!selectedCards.every(sel => JSON.stringify(sel) !== JSON.stringify(c))}
            // pass noop as clickHandler if Set timer not going
            onCardClick={!cardSelectDisabled ? onCardClick : noop}
          />)}
        </ul>))
    }
  </ul>
)

export default Board
