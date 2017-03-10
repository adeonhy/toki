import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ProjectSelector from './ProjectSelector'
import TimerButton from './TimerButton'
import TextField from 'material-ui/TextField'

export default class MainToolBar extends Component {
  // constructor(props) {
    // super(props)
    // this.state = {
      // projectName: "",
      // startTime: null,
      // endTime: null
    // }
  // }
  

  // handleChange = (event, index, value) => this.setState({value})
  state = {
    projectName: ""
  }

  onLogAdd = (time) => {
    this.props.onLogAddCallback({
      projectName: this.state.projectName,
      startTime: time.startTime,
      endTime: time.endTime,
      elapsedTime: time.elapsedTime
    })
  }

  onProjectSet = (projectName) => {
    this.setState({projectName})
  }

  style = {
    backgroundColor: 'white'
  }

  render() {
    return (
      <Toolbar style={this.style}>
        <ToolbarGroup firstChild={true}>
        <ProjectSelector onProjectSetCallback={this.onProjectSet}
          floatingLabelText="Project"/>
        <TextField hintText="Description" underlineShow={false} multiLine={true} rowsMax={2}/>
        </ToolbarGroup>
        <ToolbarGroup>
        <TimerButton onLogAddCallback={this.onLogAdd}/>
        <FontIcon className="muidocs-icon-custom-sort" />
        <ToolbarSeparator />
        <IconMenu 
          iconButtonElement={
            <IconButton touch={true}>
              <NavigationExpandMoreIcon />
              </IconButton>
          }>
        <MenuItem primaryText="Download" />
        <MenuItem primaryText="More Info" />
        </IconMenu>
        </ToolbarGroup>
        </Toolbar>
    )
  }
}

