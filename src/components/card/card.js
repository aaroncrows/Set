import React from 'react'

import cardToElement from '../../lib/cardToIcon'

import './card.scss'

const Card = ({card, selectCard, selected}) => (
  <li className={`card${selected ?  ' selected' : ''}`} onClick={() => selectCard(card)}>{cardToElement(card)}</li>
)

export default Card
