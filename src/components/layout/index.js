import React from 'react'

import Board from '../board'
import Users from '../users'
import NewGameForm from '../newGameForm'
import GameList from '../gameList'

const Layout = () => (
  <div>
    <NewGameForm />
    <Board />
    <GameList />
    <Users />
  </div>
)

export default Layout
