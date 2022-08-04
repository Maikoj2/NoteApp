import { SearchList } from "./SearchList"
import Container from 'react-bootstrap/Container'
import { NoteItem } from "./NoteItem";
import { useContext, useEffect, useReducer, useState } from "react";




import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Note } from "./Note";
import { FaPlus, FaCog } from "react-icons/fa";
import { noteReducer } from "./NoteReducer";
import { NoteContext } from './context/NoteContext'






export const ListNotes = () => {

    const {state,haldleNewNote,expanded,setExpanded,isAnimatingOut,setAnimatingOut,handeSearch} = useContext(NoteContext)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(state))
    }, [state])


    return (
     

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
                                    />
                                    <hr />
                                    <AnimatePresence>
                                        {(index === expanded) && (
                                            <Note
                                                projectobj={el}
                                                key={el.id}
                                                index={index}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                            )

                        })}
                    </AnimateSharedLayout>
                </div>
            </Container>

     
    )
}
