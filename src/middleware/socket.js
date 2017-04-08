const socketMiddleware = sock => ({getState, dispatch}) => {
  return next => action => {
    const result = next(action)
    sock.on('connect', () => {
      //changechangechange
    })
    sock.on('select', selected => {
      dispatch({type: 'SYNC_BOARD', selected})
    })
    //if (action.type === 'DEAL_BOARD') sock.emit('newGame')
    if (action.type === 'TOGGLE_SELECT') sock.emit('set', getState().selectedCards)
    return result
  }
}
export default socketMiddleware
