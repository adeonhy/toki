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
    this.props.onProjectSetCallback(value)
  }

  render() {
    return (
      <div>
        <SelectField autoWidth="true"
          floatingLabelText={this.props.floatingLabelText}
          underlineShow={false}
          value={this.state.value}
          onChange={this.handleChange}>
          {projects.map(p => {
            return  (<MenuItem value={p} primaryText={p} />)
          })}
        </SelectField>
      </div>
    );
  }
}
