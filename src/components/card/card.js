import React from 'react'

import cardToElement from '../../lib/cardToIcon'

import './card.scss'

const Card = ({card, onCardClick, selected}) => (
  <li className={`card${selected ?  ' selected' : ''}`} onClick={() => onCardClick(card)}>{cardToElement(card)}</li>
)

export default Card
