import React, { Component } from 'react'

import SearchBar from './SearchBar'
import BlockContainer from './BlockContainer';
import AddBlockBtn from './AddBlockBtn'

class UserIndex extends Component {

  render () {

    return (
      <div className='index-container'>
        <SearchBar />
        <BlockContainer />
        <AddBlockBtn />
      </div>
    )
  }
}

export default UserIndex
