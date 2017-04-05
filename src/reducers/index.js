import { TEST_ACTION } from '../constants'

const initialState = {
  greeting: 'tessting'
}
const app = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        greeting: 'YEEEAH'
      }
    default:
      return state
  }
}

export default app
