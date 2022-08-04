import { useContext } from 'react';
import { FaRegWindowRestore,FaRegTrashAlt } from 'react-icons/fa';
import { NoteContext } from './context/NoteContext';

export const ToggleMenu = ({props}) => {
    const {haldleDeleteNote} = useContext(NoteContext)
    

    return (
        <>
            <div className="item-list">
                <div id='bodyCard' ><i><FaRegWindowRestore></FaRegWindowRestore></i> Open note</div>
                <div id='btn' onClick={()=>haldleDeleteNote( props.projectobj.id)}><i><FaRegTrashAlt  ></FaRegTrashAlt></i> Delete note</div>
            </div>
        </>
    )
}
