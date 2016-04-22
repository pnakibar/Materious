import React from 'react'

export default class Note extends React.Component {
  constructor (props) {
    super(props)
    this.startEdit = this.startEdit.bind(this)
    this.checkEnter = this.checkEnter.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
    this.state = {
      editing: false
    }
  }

  render () {
    return this.state.editing ? this.renderEditing() : this.renderNormal()
  }

  renderEditing () {
    return (
      <input
        type='text'
        defaultValue={this.props.task}
        autoFocus={true}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    )
  }

  checkEnter (e) {
    if (e.key === 'Enter') {
      this.finishEdit(e)
    }
  }

  finishEdit (e) {
    const value = e.target.value
    if (this.props.onEdit) {
      this.props.onEdit(value)
    }

    this.setState({
      editing: false
    })
  }

  startEdit () {
    this.setState({
      editing: true
    })
  }

  renderNormal () {
    return (
      <div onClick={this.startEdit}>
        <span>{this.props.task} </span>
        <button onClick={this.props.onDelete}>x</button>
      </div>
    )
  }
}
