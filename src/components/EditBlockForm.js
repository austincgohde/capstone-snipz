import React, { Component } from 'react'
import { connect } from 'react-redux'
import AceEditor from 'react-ace'
import 'brace/mode/jsx';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import {
  Input,
  Button,
  FormGroup,
  Form
} from 'reactstrap'

import CancelBtn from './CancelBtn'

import { saveEditSnippet } from '../actions/snippets'
import { editToggle } from '../actions/toggles'

const languages = [
  'javascript',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css'
]

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

class EditBlockForm extends Component {

  state = {
    tagToggle: false,
    currTag: "",
    snippetName: "",
    value: "",
    theme: "monokai",
    mode: "",
    enableLiveAutocompletion: false,
    fontSize: 14,
    showGutter: true,
    showPrintMargin: true,
    highlightActiveLine: true,
    enableSnippets: false,
    showLineNumbers: true,
  }

  onChange = (newValue) => {
    this.setState({
      value: newValue
    })
  }

  setMode = (e) => {
    this.setState({
      mode: e.target.value
    })
  }

  tagFieldToggle = (e) => {
    e.preventDefault()
    let newState = {...this.state};
    newState.tagToggle = !newState.tagToggle
    this.setState(newState)
  }

  tagSubmit = (e) => {
    e.preventDefault()
    let newState = {...this.state}
    this.props.snippet.tags.push(newState.currTag)
    newState.currTag = ""
    newState.tagToggle = false
    this.setState(newState)
  }

  tagTracker = (e) => {
    let newState = {...this.state}
    newState.currTag = e.target.value
    this.setState(newState)
  }

  removeTag = (i) => {
    this.props.snippet.tags.splice(i, 1)
    this.setState(this.state)
  }

  nameChange = (e) => {
    e.preventDefault()
    let newState = {...this.state}
    newState.snippetName = e.target.value
    this.setState(newState)
  }

  formSubmit = (e) => {
    e.preventDefault()
    this.props.saveEditSnippet({
      name: this.state.snippetName !== "" ? this.state.snippetName : this.props.snippet.name,
      block: this.state.value !== "" ? this.state.value : this.props.snippet.block,
      language: this.state.mode !== "" ? this.state.mode : this.props.snippet.language,
      tags: this.props.snippet.tags
    }, this.props.toggles.showView)
    this.props.editToggle()
  }

  onChange = (newValue) => {
    this.setState({
      value: newValue
    })
  }

  setMode = (e) => {
    this.setState({
      mode: e.target.value
    })
  }

  render () {

    let tagToggleCheck = this.state.tagToggle ?
        <Input
          type='text'
          name='tag'
          id='tag'
          placeholer='A tag name'
          onChange={this.tagTracker}
          >
        </Input>
        : null

    let btnFunc = this.state.tagToggle ?
        <Button
        onClick={this.tagSubmit}
        size="sm"
        id='tag-btn'
        >
        +
        </Button>
    :   <Button
        onClick={this.tagFieldToggle}
        size='sm'
        id='tag-btn'
        >
        +
        </Button>

    let btnShow = this.props.snippet.tags.length < 3 ? btnFunc : null

    let listTags = this.props.snippet.tags.map((t, i) => <p className='tags' key={i}>{t}<i className="fa fa-close" onClick={() => this.removeTag(i)}></i></p>)

    let langList = languages.map((lang) => <option  key={lang} value={lang}>{lang}</option>)

    let langOnEdit = this.state.mode ? this.state.mode : this.props.snippet.language

    let valueOnEdit = this.state.value ? this.state.value : this.props.snippet.block

    let nameOnEdit = this.state.snippetName ? this.state.snippetName : this.props.snippet.name

    return (
      <Form
        className='snippet-form'
        onSubmit={this.formSubmit}
        >
        <FormGroup>
          <Input
            type='text'
            name='name'
            className='snippet-name'
            id='name'
            placeholder='Name of the new snippet'
            onChange={this.nameChange}
            value={nameOnEdit}
            >
          </Input>
        </FormGroup>
        <FormGroup className='create-settings'>
          <div className='tag-list'>
              {btnShow}
              {tagToggleCheck}
              {listTags}
          </div>
          <div className='lang-list'>
            <Input
              className='lang-dd'
              type='select'
              bsSize='sm'
              onChange={this.setMode}
              value={langOnEdit}
              >
              {langList}
            </Input>
          </div>
        </FormGroup>
        <AceEditor
          mode={langOnEdit}
          theme={this.state.theme}
          name={nameOnEdit}
          onChange={this.onChange}
          value={valueOnEdit}
          fontSize={this.state.fontSize}
          showPrintMargin={this.state.showPrintMargin}
          showGutter={this.state.showGutter}
          highlightActiveLine={this.state.highlightActiveLine}
          wrapEnabled={true}
          style={{width: '400px'}}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: this.state.enableLiveAutocompletion,
            enableSnippets: this.state.enableSnippets,
            showLineNumbers: this.state.showLineNumbers,
            tabSize: 4,
          }}/>
        <div className='btn-container'>
          <CancelBtn />
          <Button
            id='add-btn'
            >Save Snippet</Button>
        </div>
      </Form>
    )
  }
}

function mapStateToProps(store, props) {
  return {
    toggles: store.toggles
  }
}

export default connect(mapStateToProps, { saveEditSnippet, editToggle })(EditBlockForm)
