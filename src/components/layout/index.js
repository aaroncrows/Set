import React from 'react'

import Board from '../board'
import Users from '../users'
import NewGameForm from '../NewGameForm'

const Layout = () => (
  <div>
    <NewGameForm />
    <Board />
    <Users />
  </div>
)

export default Layout

