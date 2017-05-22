import { connect } from 'react-redux'

import gameList from './gameList'

const mapStateToProps = ({game: { games }}) => ( { games } )
const mapDispatchToProps = null

const GameList = connect(mapStateToProps, mapDispatchToProps)(gameList)

export default GameList