import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../__mocks__/mockStore'

// Container
import BoardContainer from 'src/components/board'

let testState
beforeEach(() => {
  testState = {
    selectedCards: [],
    deck: {
      board: [[{ shape: 'oval', pattern: 'solid', color: 'one', count: 1 }]]
    },
    disabled: {
      cardSelectDisabled: true
    }
  }
})

test('container render correctly', () => {
  const testRender = create(<Provider store={mockStore(testState)}><BoardContainer /></Provider>)

  expect(testRender).toMatchSnapshot()
})

