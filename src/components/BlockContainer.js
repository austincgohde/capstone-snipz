import React, { Component } from 'react'
import { connect } from 'react-redux';

import BlockListItem from './BlockListItem'

class BlockContainer extends Component {
  render () {

    let snippetMap = this.props.snippets.map((s, i) => <BlockListItem id={i} snippet={s} key={i} />)

    return (
      <div className='block-container'>
        {snippetMap}
      </div>
    )
  }
}

function mapStateToProps(store, props) {
  return {
    snippets: store.snippets
  }
}

export default connect(mapStateToProps, null)(BlockContainer)
