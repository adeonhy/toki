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
  constructor(props) {
    super(props)
  }

  onLogAdd = (time) => {
    // this.props.onLogAdd({
      // projectName: this.state.projectName,
      // startTime: time.startTime,
      // endTime: time.endTime,
      // elapsedTime: time.elapsedTime
    // })
  }

  onTimerStart = this.props.onSetStartTime
  onTimerEnd = time => {
    this.props.onSetEndTime(time)
    this.props.onLogAdd({
      projectName: this.props.projectName,
      startTime: this.props.startTime,
      endTime: time,
      description: this.props.description
    })
  }

  style = {
    backgroundColor: 'white'
  }

  onDescriptionChangeHandler = (event, index, value) => {
    this.props.onSetDescription(event.target.value)
  }

  render() {
    return (
      <Toolbar style={this.style}>
        <ToolbarGroup firstChild={true}>
        <ProjectSelector 
          onSetProjectName={this.props.onSetProjectName}
          value={this.props.projectName}
          floatingLabelText="Project"/>
        <TextField hintText="Description" 
          onChange={this.onDescriptionChangeHandler}
          value={this.props.description}
          underlineShow={false} 
          multiLine={true} rowsMax={2}/>
        </ToolbarGroup>
        <ToolbarGroup>
        <TimerButton 
          onLogAddCallback={this.onLogAdd}
          onTimerStart={this.onTimerStart}
          onTimerEnd={this.onTimerEnd}
        />
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

