import React from 'react'

import uid from '../../lib/uid'

import './gameList.scss'

const GameList = ({ games, onClick }) => (
  <ul className="gameList">
    <li>
      GAMESSSS
    </li>
    { games.map(game => <li onClick={() => onClick(game)} key={uid()}>{game}</li>)}
  </ul>
)

export default GameList
