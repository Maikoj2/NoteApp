import { FaRegWindowRestore,FaRegTrashAlt } from 'react-icons/fa';

export const ToggleMenu = (onDeleteNote) => {
    const delet = ()=>{
        console.log(onDeleteNote.id);

    }
    return (
        <>
            <div className="item-list">
                <div><i><FaRegWindowRestore></FaRegWindowRestore></i> Open note</div>
                <div><i><FaRegTrashAlt onClick={delet} ></FaRegTrashAlt></i> Delete note</div>
            </div>
        </>
    )
}
