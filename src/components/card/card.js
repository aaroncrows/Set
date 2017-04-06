import React from 'react'

import cardToElement from '../../lib/cardToIcon'

import './card.scss'

const Card = (card) => (
  <li className="card">{cardToElement(card)}</li>
)

export default Card
