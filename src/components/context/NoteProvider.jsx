import { useReducer, useState } from 'react'
import { noteReducer } from '../NoteReducer';
import { NoteContext } from './NoteContext'




const ListNotesArray = [
  {
    id: (new Date().getDate() * Math.random()),
    Message: ' toca salir de casa para dejemos de joder',
    Date: '03/05/2022',
    background: "#ffffff",
    link: ""
  }

];
const init = () => {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

export const NoteProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(undefined);
  const [state, dispatch] = useReducer(noteReducer, ListNotesArray, init)
  const [isAnimatingOut, setAnimatingOut] = useState();



  const haldleUpdate = (id, data) => {

    const action = {
      type: '[NOTE] Update Note',
      payload: data,
      id: id
    }
    dispatch(action);
  }

  const haldleNewNote = () => {
    const NewNote = {
      id: (new Date().getDate() * Math.random()),
      Message: '',
      Date: '',
      background: "",
      link: ""
    };
    const action = {
      type: '[NOTE] Add Note',
      payload: NewNote
    }
    dispatch(action);
    setExpanded(0)
  }
  const haldleDeleteNote = (id) => {

    const action = {
      type: '[NOTE] deletedFirt Note',
      payload: id
    }
    dispatch(action);
    setExpanded(undefined)
  }

  const handeSearch = (search) => {

    console.log(search);
  }


  return (
    <NoteContext.Provider value={{ state, haldleNewNote, expanded, setExpanded, haldleDeleteNote, haldleUpdate, isAnimatingOut, setAnimatingOut, handeSearch }}>
      {children}
    </NoteContext.Provider>
  )
}

