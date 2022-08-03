import { FaTimes, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { useState } from 'react';

const today = new Date();
export const Note = (props) => {
   const [NoteData, setNoteData ] = useState(props.projectobj)

    const detailsVariants = {
        initial: {
            opacity: 0,
            scale: 0.4
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.4
            }
        },
        exit: {
            opacity: 0,
            scale: 0.4,
        }
    };
    const containerVariants = {
        initial: {
            borderRadius: "20px"
        },
        animate: {
            borderRadius: "20px"
        }
    };
    const backgroundVariants = {
        initial: { backgroundColor: " rgba(255, 255, 255, 0)" },
        animate: {
            backgroundColor: " rgba(255, 255, 255, 0.99)"
        },
        exit: {
            backgroundColor: "rgba(255, 255, 255, 0)"
        }
    };

    const handelSaveOrDelete = (event) => {
        const textarea = document.getElementsByTagName('textarea');
        if (textarea.textarea.value === "") {
            props.ondeleteNote( NoteData.id)
        }else{
            props.onupdateNote(NoteData.id, textarea.textarea.value)
           
        }
    }


    return (
        <>
            <motion.div
                id="expandedProjectCard"
                onClick={() => {
                    props.setexpanded(undefined);
                    props.setanimatingout(props.index);
                    handelSaveOrDelete()
                }}
                initial="initial"
                animate="animate"
                variants={backgroundVariants}
                exit="exit"
                className="content"

            >
                <motion.div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    layoutId={`Container${props.projectobj.id}`}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                >

                    <motion.div layoutId={`BackgroundContainer${props.projectobj.id}`}>

                        <motion.div
                            className='heaad'>
                            <motion.a
                                layoutId={`head${props.projectobj.id}`}
                                onClick={() => {
                                    props.setexpanded(undefined);
                                    props.setanimatingout(props.index);
                                }}>
                                <FaTimes onClick={handelSaveOrDelete}></FaTimes>
                            </motion.a>
                            <motion.a layoutId={`butom${props.projectobj.id}`}>
                                <FaPlus></FaPlus>
                            </motion.a>
                        </motion.div>

                        <motion.div

                            variants={detailsVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            layoutId={`message${props.projectobj.id}`}
                            className="form__group field">
                            <textarea name="textarea" className="textarea" placeholder="Your note here..." cols="40" rows="10" minLength="10"
                                maxLength="500" defaultValue={ NoteData.Message}></textarea>
                        </motion.div>

                    </motion.div>
                </motion.div>

            </motion.div>

        </>
    )
}
