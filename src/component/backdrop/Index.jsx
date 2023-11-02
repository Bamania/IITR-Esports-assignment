import { motion } from 'framer-motion';

const Index = ({ children, onClick }) => {
  return (
    <motion.div
      className='fixed top-0 right-0 bottom-0 left-0 rounded-lg bg-[#000000] bg-opacity-100 flex items-center justify-center'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9, transition: { duration: 1 } }} // Adjust the duration
      exit={{ opacity: 0, transition: { duration: 1 } }} // Adjust the duration
      style={{ zIndex: 9999 }}>
      {children}
    </motion.div>
  );
}

export default Index;
