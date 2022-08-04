import { motion } from 'framer-motion'
import { useContext } from 'react';
import { ButtonToggle } from './ButtonToggle';
import { NoteContext } from './context/NoteContext';

const containerVariants = {
    initial: {
        scale: 0, 
    },
    animate: {
         scale: 1
        ,
        transition:{
            type: "spring",
            stiffness: 260,
            damping: 20
          }
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
    const {setExpanded,isAnimatingOut,setAnimatingOut} = useContext(NoteContext)
    const expand=(e)=>{
         if (e.target.id ==='input' || e.target.id === 'btn') setExpanded(undefined) 
         if( e.target.id ==='bodyCard') setExpanded(props.index);
    }

    let zIndex = 10;
    if (props.isanimatingout) {
        zIndex = 40;
    }
    return (
        <>

            <motion.div
                style={{ zIndex: zIndex }}
                onClick={expand}
                onLayoutAnimationComplete={() => {  
                    if (props.isanimatingout) {
                        setAnimatingOut(false);
                    }
                }}
                layoutId={`Container${props.projectobj.id}`}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"

            >
                <motion.div   id='bodyCard' className='contentItem 'layoutId={`BackgroundContainer${props.projectobj.id}`}>



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
                        variants={dateMotion}
                    >
                        <ButtonToggle props={props} ></ButtonToggle>
                    </motion.div>
                </motion.div>
            </motion.div>



        </>
    )
}
