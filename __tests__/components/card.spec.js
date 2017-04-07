import React from 'react'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'

import Card from 'src/components/card/card'

let testCard
beforeEach(() => {
  testCard = {
    shape: 'oval',
    color: 'first',
    pattern: 'solid',
    count: 1
  }
})

test('should render correctly', () => {
  const testRender = create(<Card card={testCard} />)

  expect(testRender).toMatchSnapshot()
})

test('should pass the card to onClick', () => {
  const mockClick = jest.fn()
  const testRender = shallow(<Card card={testCard} onCardClick={mockClick} />)
  testRender.simulate('click')
  const clickArguments = mockClick.mock.calls[0][0]

  expect(clickArguments).toEqual(testCard)
})
