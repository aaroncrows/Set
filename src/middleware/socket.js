import io from 'socket.io-client'
import { syncAndValidate, dealBoard } from '../actions/boardActions'
import { pauseForSelect } from '../actions/setButtonActions'

const sock = io('http://localhost:8888/')

const socketMiddleware = ({ getState, dispatch }) => {
  sock.on('new', cards => dispatch(dealBoard(cards)))
  sock.on('select', selectedCards => dispatch(syncAndValidate(selectedCards)))
  sock.on('pauseForSet', () => dispatch(pauseForSelect()))

  return next => (action) => {
    if (!action) return
    const result = next(action)

    if (action.type === 'TOGGLE_SELECT') return sock.emit('set', getState().selectedCards)
    if (action.type === 'IS_CHOOSING') sock.emit('choosingSet')
    return result
  }
}

export default socketMiddleware
