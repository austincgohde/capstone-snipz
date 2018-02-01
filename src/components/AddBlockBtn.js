import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap';

import { addToggle } from '../actions/toggles'

class AddBlockBtn extends Component {
  render () {

    return (
      <Button
        className='block-btn'
        id='add-btn'
        onClick={this.props.addToggle}
        >
        Create A New Snippet
      </Button>
    )
  }
}

export default connect(null, { addToggle })(AddBlockBtn)
