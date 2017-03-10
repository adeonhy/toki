import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const projects = [
  'undefined',
  'SMS / manatee',
  'SMS / adapter',
  'qoncept / soramite',
  'SMS_顧客集客基盤プロジェクト  開発',
  'other'
]

export default class ProjectSelector extends Component {
  state = {
    value: 'undefined',
  }

  style = {
    autoWidth: true
  }

  handleChange = (event, index, value) => {
    this.setState({value})
    this.props.onSetProjectName(value)
  }

  render() {
    return (
      <div>
        <SelectField 
          floatingLabelText={this.props.floatingLabelText}
          underlineShow={false}
          value={this.props.value}
          onChange={this.handleChange}>
          {projects.map((p,i) => {
            return  (<MenuItem key={i} value={p} primaryText={p} />)
          })}
        </SelectField>
      </div>
    );
  }
}
