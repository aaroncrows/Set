import React from 'react'

import './card.css'

const Card = ({pattern, color, count, shape}) => (
  <li className="card">{`${pattern} ${color} ${count} ${shape}`}</li>
)

export default Card
