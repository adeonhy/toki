import React, {Component} from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import ProjectSelector from './ProjectSelector'
import TextField from 'material-ui/TextField'

const TimeLogTableRow = props => {
  console.log(props)
  return (
    <TableRow key={props.id} selectable={false}>
      <TableRowColumn><ProjectSelector value={props.log.projectName} /></TableRowColumn>
      <TableRowColumn><TextField value={props.log.description} /></TableRowColumn>
      <TableRowColumn>{props.log.startTime}</TableRowColumn>
      <TableRowColumn>{props.log.endTime}</TableRowColumn>
      <TableRowColumn>{props.log.elapsedTime}</TableRowColumn>
      </TableRow>
  )
}

export default TimeLogTableRow
