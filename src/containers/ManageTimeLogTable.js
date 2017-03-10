import { connect } from 'react-redux'
import TimeLogTable from '../components/TimeLogTable'

const mapStateToProps = (state) => ({
  logs: state.logs
})

const ManageTimeLogTable = connect(
  mapStateToProps
)(TimeLogTable)

export default ManageTimeLogTable
