import { motion } from 'framer-motion'
import { ButtonToggle } from './ButtonToggle';

const containerVariants = {
    initial: {
        borderRadius: "20px"
    },
    animate: {
        borderRadius: "20px"
    },
    hover: {
        y: -10
    }
};
const textMotion = {
    rest: {
        color: "grey",
        transition: {
            duration: 0.1,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        display: 'none',
    }
};
const dateMotion = {
    initial: {
        display: 'none', ease: "easeOut", duration: 0.2, type: "tween",
    },
    hover: {
        display: 'block',
        transition: {
            duration: 0.1,
            type: "tween",
            ease: "easeIn"
        },

    }
};



export const NoteItem = (props) => {
    let zIndex = 10;
    if (props.isanimatingout) {
        zIndex = 40;
    }
    return (
        <>

            <motion.div
              
                style={{ zIndex: zIndex }}
                onClick={(e) => {

                    (e.target instanceof HTMLInputElement) ? props.setexpanded(undefined) : props.setexpanded(props.index);
                }}
                onLayoutAnimationComplete={() => {
                    if (props.isanimatingout) {
                        props.setanimatingout(false);
                    }
                }}
                layoutId={`Container${props.projectobj.id}`}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"

            >
                <motion.div    className='contentItem 'layoutId={`BackgroundContainer${props.projectobj.id}`}>



                    <motion.p layoutId={`message${props.projectobj.id}`}>
                        {props.projectobj.Message}
                    </motion.p>
                    <motion.span
                        layoutId={`date${props.projectobj.id}`}
                        variants={textMotion}
                    >
                        {props.projectobj.Date}
                    </motion.span>
                    <motion.div
                        layoutId={`butom${props.projectobj.id}`}
                        variants={dateMotion}
                    >
                        <ButtonToggle onDeleteNote={props.ondeleteNote} note={props.projectobj.id} ></ButtonToggle>
                    </motion.div>
                </motion.div>
            </motion.div>



        </>
    )
}
