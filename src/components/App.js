import React, {Component} from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTimeLog from '../containers/AddTimeLog'
import ManageTimeLogTable from '../containers/ManageTimeLogTable'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TimeLogTable from './TimeLogTable'
import MainToolBar from './MainToolBar'


// const App = () => (
  // <MuiThemeProvider>
    // <AddTodo />
    // <VisibleTodoList />
    // <Footer />
  // </MuiThemeProvider>
// )

export default class App extends Component {


  onLogAdd = (log) => {
    this.refs.timeLogTable.addLog(log)
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
        <AddTimeLog />
        <p>Today</p>
        <ManageTimeLogTable ref='timeLogTable'/>
        </div>
        </MuiThemeProvider>
    )
  }
}

