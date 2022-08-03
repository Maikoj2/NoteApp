import { SearchList } from "./SearchList"
import Container from 'react-bootstrap/Container'
import { NoteItem } from "./NoteItem";
import { useEffect, useReducer, useState } from "react";




import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Note } from "./Note";
import { FaPlus, FaCog } from "react-icons/fa";
import { noteReducer } from "./NoteReducer";


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


export const ListNotes = () => {


    const [expanded, setExpanded] = useState(undefined);
    const [isAnimatingOut, setAnimatingOut] = useState();
    const [state, dispatch] = useReducer(noteReducer, ListNotesArray, init)
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(state))
    }, [state])

    const haldleUpdate = (id,data) => {
        
        const action = {
            type: '[NOTE] Update Note',
            payload: data,
            id:id
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

    const handeSearch =(search) =>{

        console.log(search);
    }

    return (
        <>
            <Container className="listnote">

                <dir className='headerApp'>
                    <div className="headerIcon">
                        <a onClick={haldleNewNote}><i> <FaPlus></FaPlus></i></a>
                        <a href=""><i> <FaCog></FaCog></i></a>
                    </div>
                    <h1>Note app </h1>

                </dir>


                <SearchList  onSearch={handeSearch} ></SearchList>
                <div id="projectsGrid">
                    <AnimateSharedLayout type='switch'>
                        {state.map((el, index) => {
                            return (
                                < div key={el.id} >
                                    <NoteItem
                                        projectobj={el}
                                        key={el.id}
                                        index={index}
                                        setexpanded={setExpanded}
                                        isanimatingout={isAnimatingOut === index}
                                        setanimatingout={setAnimatingOut}
                                        ondeleteNote={haldleDeleteNote}
                                    />
                                    <hr />

                                    <AnimatePresence>
                                        {(index === expanded) && (

                                            <Note
                                                projectobj={el}
                                                key={el.id}
                                                index={index}
                                                setexpanded={setExpanded}
                                                setanimatingout={setAnimatingOut}
                                                ondeleteNote={haldleDeleteNote}
                                                onupdateNote={haldleUpdate}
                                            />

                                        )}
                                    </AnimatePresence>
                                </div>
                            )

                        })}
                    </AnimateSharedLayout>
                </div>
            </Container>

        </>
    )
}
