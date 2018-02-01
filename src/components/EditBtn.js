import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { editToggle } from '../actions/toggles'

class EditBtn extends Component {
  render () {
    return (
      <Button
        onClick={this.props.editToggle}
        id='edit-btn'
        >Edit</Button>
    )
  }
}

export default connect(null, { editToggle })(EditBtn)
