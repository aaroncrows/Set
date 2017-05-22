import React from 'react'

import uid from '../../lib/uid'

import './gameList.scss'

const GameList = ({ games }) => (
  <ul className="gameList">
    <li>
      GAMESSSS
    </li>
    { games.map(game => <li key={uid()}>{game}</li>)}
  </ul>
)

export default GameList
