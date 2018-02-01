import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Button
} from 'reactstrap'

import { saveUser } from '../actions/auth.js';

class Landing extends Component {

  login = () => {
    this.props.saveUser()
  }

  render () {
    return (
      <div className="login-div">
        <h1>Snipz</h1>
        <Button
          onClick={this.login}
          >
          Login with Google</Button>
      </div>
    )
  }
}

export default connect(null, { saveUser })(Landing)
