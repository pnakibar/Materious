import React from 'react'
// import Note from './Note.jsx'
// import RaisedButton from 'material-ui/lib/raised-button'
import uuid from 'node-uuid'
import Notes from './Notes.jsx'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.addNote = this.addNote.bind(this)
    this.editNote = this.editNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        }, {
          id: uuid.v4(),
          task: 'Learn React'
        }, {
          id: uuid.v4(),
          task: 'Do Laundry'
        }
      ]
    }
  }

  editNote (id) {
    return (newTask) => {
      if (!newTask.trim()) return
      this.setState({
        notes: this.state.notes.map((note) => {
          return note.id === id ? {id: note.id, task: newTask} : note
        })
      })
    }
  }

  addNote () {
    this.setState({
      notes: this.state.notes.concat({
        id: uuid.v4(),
        task: 'just add me please'
      })
    })
  }

  deleteNote (id) {
    return () => {
      let newState = this.state.notes.filter((note) => note.id !== id)
      this.setState({
        notes: newState
      })
    }
  }

  render () {
    const notes = this.state.notes
    return (
    <div>
      <button onClick={this.addNote}>+</button>
      <Notes
        notes={notes}
        onEdit={this.editNote}
        onDelete={this.deleteNote}/>
    </div>
    )
  }
}
