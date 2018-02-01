import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { cancelEdit } from '../actions/toggles'

class CancelBtn extends Component {
  render () {
    return (
      <Button
        onClick={this.props.cancelEdit}
        id='back-btn'
        >Cancel</Button>
    )
  }
}

export default connect(null, { cancelEdit })(CancelBtn)
