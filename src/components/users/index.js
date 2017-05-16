import React, { Component } from 'react'

import UserNav from '../userNav'
import uid from '../../lib/uid'

import './users.scss'

const users = ['bill', 'ted', 'dave', 'lily']

const Users = () => (
  <nav className="users">
    {users.map(u => (<UserNav key={uid()} name={u} />))}
  </nav>
)

export default Users

