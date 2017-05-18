import React from 'react'

const NewGameForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="userName" placeholder="Name" />
    <input type="submit" />
  </form>
)

export default NewGameForm
