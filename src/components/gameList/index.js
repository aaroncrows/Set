import { connect } from 'react-redux'

import gameList from './gameList'

import { joinGame } from '../../actions/newGameFormActions'

const mapStateToProps = ({ game: { games } }) => ({ games })
const mapDispatchToProps = dispatch => (
  {
    onClick: game => dispatch(joinGame(game))
  }
)

const GameList = connect(mapStateToProps, mapDispatchToProps)(gameList)

export default GameList
