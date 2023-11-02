import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../modal/Modal.jsx';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const Card3 = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return (
        <>
            <div className='mt-3  m-3 '>
                <Card className="w-96  rounded-none">
                    <CardHeader color="blue-gray" className="relative h-56 ">
                        <img className=''
                            src={props.imageSrc}
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography className='font-semibold mt-3 text-red-400 bg-[#0c111c] '>
                            {props.title}
                        </Typography>
                        <Typography className='font-semibold'>
                            {props.content}
                        </Typography>
                    </CardBody>

                    <div className='flex justify-center bg-[#0c111c] p-4'>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='bg-purple-700 p-2 text-white'
                            onClick={() => (modalOpen ? close() : open())}>
                            {props.name}
                        </motion.div>
                        <AnimatePresence
                            initial={false}
                            mode='wait'
                            onExitComplete={() => null}>
                            {modalOpen && <Modal  title={props.tit} text={props.des} modalOpen={modalOpen} handleClose={close} />}

                        </AnimatePresence>
                    </div>

                </Card>
            </div>
        </>
    );
}

export default Card3;
