import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import { mount as shallow } from 'enzyme'
import mockStore from '../__mocks__/mockStore'

// Container
import BoardContainer from 'src/components/board'

const mockBoard = state => (
  <Provider store={mockStore(state)}>
    <BoardContainer />
  </Provider>
)
const defaultTestState = {
  selectedCards: [],
  deck: {
    board: [
      [{
        shape: 'oval',
        pattern: 'solid',
        color: 'one',
        count: 1
      }]
    ]
  },
  disabled: {
    cardSelectDisabled: true
  }
}

test('container render correctly', () => {
  const testRender = create(mockBoard(defaultTestState))

  expect(testRender).toMatchSnapshot()
})


