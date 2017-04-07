import React, { Component } from 'react'
import uid from '../../lib/uid'

import Card from '../card/card'

class Board extends Component {

  componentWillReceiveProps(newProps) {
    const { selectedCards, validateSet } = newProps
    if (selectedCards.length >= 3) validateSet()
  }

  render() {
    const { board, onCardClick, selectedCards } = this.props
    return (<ul className="board">
      {
        board.map(row => (
          <ul key={uid()}>
            {row.map(c => <Card
                            key={uid()}
                            card={c}
                            selected={selectedCards.includes(c)}
                            onCardClick={onCardClick}
                          />)}
          </ul>))
      }
    </ul>
  )
  }
}

export default Board
