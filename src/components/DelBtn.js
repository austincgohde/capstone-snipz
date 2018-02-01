import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { delSnippet } from '../actions/snippets'
import { initAppToggles } from '../actions/toggles'

class DelBtn extends Component {

  fireDelete = () => {
    this.props.delSnippet(this.props.id)
    this.props.initAppToggles()
  }

  render () {
    return (
      <Button
        onClick={this.fireDelete}
        id='del-btn'
        >Delete</Button>
    )
  }
}

export default connect(null, { delSnippet, initAppToggles })(DelBtn)
