const createMockStore = (state, dispatch = () => {}) => (
  {
    default: () => {},
    subscribe: () => {},
    getState: () => ({...state}),
    dispatch
  }
)

export default createMockStore
