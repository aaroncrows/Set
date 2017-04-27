import React from 'react'

const SetButton = ({ onClick, setButtonDisabled, setCountDown }) => (
  <nav>
    <button onClick={onClick} disabled={setButtonDisabled}>SET</button>
    <h1>{setCountDown}</h1>
  </nav>
)

export default SetButton

