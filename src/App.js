import React, { Component } from 'react';
import { connect } from 'react-redux';

import Landing from './components/Landing'
import UserIndex from './components/UserIndex'
import AddBlockForm from './components/AddBlockForm'
import EditBlockForm from './components/EditBlockForm'
import Block from './components/Block'

import {
  addToggle,
  viewToggle,
  initAppToggles
} from './actions/toggles'

class App extends Component {

  componentDidMount() {
    this.props.initAppToggles()
  }

  render() {

  let toggleCheck = this.props.toggles.addForm ? <AddBlockForm />
: typeof this.props.toggles.showView === "number"
? this.props.toggles.editForm
  ? <EditBlockForm snippet={this.props.snippets[this.props.toggles.showView]}/>
  : <Block snippet={this.props.snippets[this.props.toggles.showView]} id={this.props.toggles.showView}/>
: <UserIndex />
  let authCheck = !this.props.user.id ? <Landing /> : toggleCheck

    return (
      <div className="App">
        {authCheck}
      </div>
    );
  }
}

function mapStateToProps(store, props) {
  return {
    user: store.user,
    snippets: store.snippets,
    toggles: store.toggles
  }
}

export default connect(mapStateToProps, { addToggle, viewToggle, initAppToggles })(App);
