import React, { Component } from 'react'
import AceEditor from 'react-ace';

import BackBtn from './BackBtn'
import DelBtn from './DelBtn'
import EditBtn from './EditBtn'

class Block extends Component {
  render () {

    let {
      language,
      name,
      block,
      tags
    } = this.props.snippet

    return (
      <div>
        <h3 className='snippet-name'>{name}</h3>
        <div className='tag-list' id='view-tags'>
          {tags.map(t => <p className='tags' key={t}>{t}</p>)}
        </div>
        <AceEditor
          mode={language}
          theme='monokai'
          name={name}
          value={block}
          fontSize={14}
          wrapEnabled={true}
          readOnly={true}
          style={{width: '400px'}}
          setOptions={{
            enableBasicAutocompletion: true,
            showLineNumbers: true,
            tabSize: 4,
          }}/>
        <div className='btn-container'>
          <BackBtn />
          <EditBtn />
          <DelBtn />
        </div>
      </div>
    )
  }
}

export default Block
