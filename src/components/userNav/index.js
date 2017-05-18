import { connect } from 'react-redux'
import userNav from './userNav'

const mapStateToProps = ({ timer }) => ( { timer })

const UserNav = connect(mapStateToProps, null)(userNav)

export default UserNav

