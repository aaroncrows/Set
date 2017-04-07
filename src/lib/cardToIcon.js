import React from 'react'
// takes card object and converts it to jsx
import uid from './uid'

const cardToElement = ({ shape, count, pattern, color }) => {
  const numToString = [null, 'one', 'two', 'three']
  const shapeToIcon = { oval: 'leaf', diamond: 'fire', curve: 'power' }
  const classString = `icons-${numToString[count]} color-${color} icon-${shapeToIcon[shape]}`
  const spans = Array(count).fill(null).map(_ => (
    <span className={classString} key={uid()} />
  ))
  spans.push(<span className="pattern" key={uid()}>{pattern}</span>)
  return spans
}

export default cardToElement
