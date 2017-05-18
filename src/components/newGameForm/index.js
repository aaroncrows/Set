import { connect } from 'react-redux'

import newGameForm from './newGameForm'
import { startNewGame } from '../../actions/newGameFormActions'

const mapStateToProps = null

const mapDispatchToProps = dispatch => (
  {
    onSubmit: (e) => {
      const input = e.target.userName
      e.preventDefault()

      if (!input.value) return

      dispatch(startNewGame(e.target.userName.value))
      input.value = ''
    }
  }
)

const NewGameForm = connect(mapStateToProps, mapDispatchToProps)(newGameForm)

export default NewGameForm
