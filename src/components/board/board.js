import React from 'react'
import uid from '../../lib/uid'

const Board = ({ board }) => (
  <ul className="board">
    {
      board.map(row => (
        <ul key={uid()}>
          {row.map(c => <li key={uid()}>{`${c.pattern}${c.color}${c.shape}`}</li>)}
        </ul>))
    }
  </ul>
)

export default Board
