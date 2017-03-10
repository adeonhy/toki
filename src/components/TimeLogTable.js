import React, {Component} from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import TimeLogTableRow from './TimeLogTableRow'

export default class TimeLogTable extends Component {
  // state = {
    // fixedHeader: true,
    // fixedFooter: true,
    // stripedRows: false,
    // showRowHover: false,
    // selectable: true,
    // multiSelectable: false,
    // enableSelectAll: false,
    // deselectOnClickaway: true,
    // height: '300px',
  // }

  // state = {
    // showCheckboxes: false,
    // value: 'undefined',
    // logs: []
  // }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Project</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Start Time</TableHeaderColumn>
            <TableHeaderColumn>End Time</TableHeaderColumn>
            <TableHeaderColumn>Elapsed Time</TableHeaderColumn>
          </TableRow>
        </TableHeader>
          <TableBody>
            {this.props.logs.map(log => {
              return <TimeLogTableRow log={log.log} />
            })}
          </TableBody>
      </Table>
    )
  }
}
