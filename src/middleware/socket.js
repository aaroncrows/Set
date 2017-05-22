import io from 'socket.io-client'
import { syncAndValidate, dealBoard } from '../actions/boardActions'
import { pauseForSelect } from '../actions/setButtonActions'
import { newGameCreated } from '../actions/newGameFormActions'

let initialized = false
let socket

const socketMiddleware = ({ getState, dispatch }) => {
  const initializeSocket = () => {
    if (socket) return
    socket = io('http://localhost:8888/')

    socket.on('gameCreated', (id) => {
      dispatch(newGameCreated(id))
    })

    socket.on('joined', ({ cards }) => {
      dispatch(dealBoard(cards))
    })

    socket.on('select', ({ selectedCards }) => {
      dispatch(syncAndValidate(selectedCards))
    })
    socket.on('pauseForSet', () => dispatch(pauseForSelect()))
  }

  initializeSocket()

  return next => (action) => {
    if (!action) return
    initializeSocket()

    const result = next(action)

    // if (action.type === 'START_NEW_GAME') initializeSocket()

    if (socket) {
      const { game: { currentGame: id } } = getState()
      if (action.type === 'START_NEW_GAME') socket.emit('newGame', action.userName)
      if (action.type === 'TOGGLE_SELECT') {
        const { selectedCards } = getState()

        return socket.emit('set', { cards: selectedCards, id })
      }
      if (action.type === 'ENABLE_CARD_SELECT') {
        socket.emit('choosingSet', { id })
      }
      if (action.type === 'JOIN_GAME') socket.emit('joinGame', { id: action.id, currentGame: id })
    }
    return result
  }
}

export default socketMiddleware

