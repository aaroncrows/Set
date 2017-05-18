import React from 'react'
import './setButton.scss'

const SetButton = ({ onClick, setButtonDisabled }) => (
  <button className="setButton" onClick={onClick} disabled={setButtonDisabled}>SET</button>
)

export default SetButton
