import React, { Component } from 'react';
import { connect } from 'react-redux'
import AceEditor from 'react-ace';
import 'brace/mode/jsx';

import { viewToggle } from '../actions/toggles'

class BlockListItem extends Component {

  render () {

    let tagListing = this.props.snippet.tags.map(t => <p key={t} className='tags'>{t}</p>)

    return (
      <div
        onClick={() => this.props.viewToggle(this.props.id)}
        >
        <div className='block'>
          <p className='list-name'>{this.props.snippet.name}</p>
          {tagListing}
        </div>
        <div>
          <AceEditor
            mode={this.props.snippet.language}
            theme='monokai'
            name={this.props.snippet.name}
            value={this.props.snippet.block}
            fontSize={12}
            wrapEnabled={true}
            readOnly={true}
            showGutter={false}
            editorProps={{ $blockScrolling: Infinity }}
            style={{width: '370px', height: '50px'}}
            />
        </div>
      </div>
    )
  }
}

export default connect(null, { viewToggle })(BlockListItem)
