import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input
} from 'reactstrap'

class SearchBar extends Component {
  render () {
    return (
      <div className='search-bar'>
        <Form>
          <FormGroup>
            <Input
              type="search"
              name="search"
              id="search-bar"
              placeholder="Search by name or #tags;" />
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default SearchBar
