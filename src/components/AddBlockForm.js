import React, { Component } from 'react';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import 'brace/mode/jsx';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import {
  FormGroup,
  Form,
  Input,
  Button
} from 'reactstrap';

import BackBtn from './BackBtn'

import { saveSnippet } from '../actions/snippets'
import { addToggle } from '../actions/toggles'

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

const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
]

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

class AddBlockForm extends Component {

  state = {
    tagToggle: false,
    tags: [],
    currTag: "",
    snippetName: "",
    value: '',
    theme: 'terminal',
    mode: 'javascript',
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
    newState.tags.push(newState.currTag)
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
    let newState = {...this.state}
    newState.tags.splice(i, 1)
    this.setState(newState)
  }

  nameChange = (e) => {
    e.preventDefault()
    let newState = {...this.state}
    newState.snippetName = e.target.value
    this.setState(newState)
  }

  formSubmit = (e) => {
    e.preventDefault()
    this.props.saveSnippet({
      name: this.state.snippetName,
      block: this.state.value,
      language: this.state.mode,
      tags: this.state.tags
    })
    this.props.addToggle()
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
          placeholder='A tag name'
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

    let btnShow = this.state.tags.length < 3 ? btnFunc : null

    let listTags = this.state.tags.map((t, i) => <p className='tags' key={i}>{t}<i className="fa fa-close" onClick={() => this.removeTag(i)}></i></p>)

    let langList = languages.map((lang) => <option  key={lang} value={lang}>{lang}</option>)

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
              value={this.state.mode}
              >
              {langList}
            </Input>
          </div>
        </FormGroup>
        <AceEditor
          mode={this.state.mode}
          theme={this.state.theme}
          name="blah2"
          onChange={this.onChange}
          value={this.state.value}
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
          <BackBtn />
          <Button
            id='add-btn'
            >Create Snippet</Button>
        </div>
      </Form>

    )
  }
}

export default connect(null, { saveSnippet, addToggle })(AddBlockForm)
