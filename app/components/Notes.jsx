import React from 'react'
import Note from './Note.jsx'

export default (props) => {
  return (
  <ul>
    {props.notes.map((note) => {
       return (<li key={note.id}>
                 <Note task={note.task} onEdit={props.onEdit(note.id)} onDelete={props.onDelete(note.id)} />
               </li>
       )})}
  </ul>
  )
}
