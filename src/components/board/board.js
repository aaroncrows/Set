import React, { Component } from 'react'
import uid from '../../lib/uid'

import Card from '../card/card'

const Board = ({ board, onCardClick, selectedCards }) => (
  <ul className="board">
    {
      board && board.map(row => (
        <ul key={uid()}>
          {row.map(c => <Card
            key={uid()}
            card={c}
            selected={!selectedCards.every(sel => JSON.stringify(sel) !== JSON.stringify(c))}
            onCardClick={onCardClick}
          />)}
        </ul>))
    }
  </ul>
)

export default Board
