import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../lib/mockStore'

import Board from 'src/components/board'

let testState
beforeEach(() => {
  testState = {
    selectedCards: [],
    board: [[{shape: 'testShape', pattern: 'testPattern', color: 'testColor', count: 'testCount'}]]
  }
})

test('should render correctly', () => {
  const testRender = create(<Provider store={mockStore(testState)}><Board /></Provider>)

  expect(testRender).toMatchSnapshot()
})
