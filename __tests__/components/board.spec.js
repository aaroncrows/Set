import React from 'react'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import mockStore from '../lib/mockStore'

// Container
import BoardContainer from 'src/components/board'
// Presentational Component
import Board from 'src/components/board/board'

let testState
beforeEach(() => {
  testState = {
    selectedCards: [],
    board: [[{shape: 'oval', pattern: 'solid', color: 'one', count: 1 }]]
  }
})

test('container render correctly', () => {
  const testRender = create(<Provider store={mockStore(testState)}><BoardContainer /></Provider>)

  expect(testRender).toMatchSnapshot()
})

test('should check set if three cards are selected', () => {
  const validateSet = jest.fn()
  testState.validateSet = validateSet
  const testRender = shallow(<Board {...testState} />)
  testState.selectedCards = [null, null, null]

  testRender.setProps(testState)

  expect(validateSet.mock.calls.length).toBe(1)
})
