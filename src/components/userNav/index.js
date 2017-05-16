import { connect } from 'react-redux'
import userNav from './userNav'

const mapStateToProps = ({ setCountDown }) => ( { setCountDown })

const UserNav = connect(mapStateToProps, null)(userNav)

export default UserNav

