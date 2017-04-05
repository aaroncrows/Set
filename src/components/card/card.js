import React from 'react'

const Card = ({pattern, color, count, shape}) => (
  <li className="card">{`${pattern} ${color} ${count} ${shape}`}</li>
)

export default Card
