import React, { Component } from 'react'

import SetButton from '../setButton'

import styles from './userNav.scss'

const UserNav = ({ name, timer }) => (
  <nav className="userNav">
    <h2>{ name }</h2>
    <h2>score</h2>
    <h1>{timer}</h1>
    <SetButton />
  </nav>
)

export default UserNav

