import React, { Component } from 'react'
import uid from '../../lib/uid'

import SetButton from '../setButton'
import Card from '../card/card'

const noop = () => {}

const Board = ({ board, onCardClick, selectedCards, isChoosing }) => (
  <div>
    <nav><SetButton /></nav>
    <ul className="board">
      {
        board && board.map(row => (
          <ul key={uid()}>
            {row.map(c => <Card
              key={uid()}
              card={c}
              selected={!selectedCards.every(sel => JSON.stringify(sel) !== JSON.stringify(c))}
              // pass noop as clickHandler if Set timer not going
              onCardClick={isChoosing ? onCardClick : noop}
            />)}
          </ul>))
      }
    </ul>
  </div>
)

export default Board
