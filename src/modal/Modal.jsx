import { motion } from 'framer-motion';
import Index from '../component/backdrop/Index.jsx';

const dropIn={
    hidden:{y:"-100vh",
opacity:0},
    visible:{y:'0',
opacity:1,
transition:
{duration:0.1,
    type:'spring',
    damping:25,
    stiffness:500}},
    exit:{y:"100vh",
    opacity:0}
};

const Modal=({handleClose,text,title})=>{
    return (
        <Index className="flex flex-col items-centre rounded-lg" onClick={handleClose}>
    <motion.div
    onClick={(e)=>e.stopPropagation()}
    variants={dropIn}
    initial="hidden"
    animate="visible"
    exit="exit"
    className='bg-white rounded-lg w-1/2  '
            >
          {/* <div className="bg-red-500"> */}
            <h1 className='flex justify-center text-black font-semibold text-semibold '>{title}</h1>
            <p className='text-black font-semibold p-3'>{text} </p> 
            {/* </div> */}
            <div className='flex justify-center p-1'>
        <button onClick={handleClose} className='bg-purple-700 w-[70px] text-white rounded-lg p-2 text-bold'>Close</button></div>
       

    </motion.div>
    </Index>
    )
}

export default Modal;