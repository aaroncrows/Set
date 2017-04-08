import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../lib/mockStore'

// Container
import BoardContainer from 'src/components/board'

let testState
beforeEach(() => {
  testState = {
    selectedCards: [],
    board: [[{ shape: 'oval', pattern: 'solid', color: 'one', count: 1 }]]
  }
})

test('container render correctly', () => {
  const testRender = create(<Provider store={mockStore(testState)}><BoardContainer /></Provider>)

  expect(testRender).toMatchSnapshot()
})

