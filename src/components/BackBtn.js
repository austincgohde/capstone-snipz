import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { goBack } from '../actions/toggles'

class BackBtn extends Component {
  render () {
    return (
      <Button
        onClick={this.props.goBack}
        id='back-btn'
        >Back</Button>
    )
  }
}

export default connect(null, { goBack })(BackBtn)
