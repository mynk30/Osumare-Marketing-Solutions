import { motion } from 'framer-motion';

const HeroSection = ({ setIsFormOpen }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional organization services to help you create a clutter-free, functional, and beautiful living space.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
